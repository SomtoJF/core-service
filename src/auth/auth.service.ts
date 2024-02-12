import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) throw new UnauthorizedException();

    // if password is incorrect throw exception
    const passwordMatches = await argon.verify(user.hash, password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Email or Password is Incorrect');
    }

    // TODO: Generate a JWT and return it here
    // instead of the user object
    const payload = {
      sub: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '2h',
        secret: this.config.get('JWT_SECRET'),
      }),
    };
  }

  async signup(dto: SignupDto) {
    try {
      // hash password
      const hash = await argon.hash(dto.password);
      delete dto.password;

      // send payload to database
      const payload = { ...dto, hash };
      const response = await this.prisma.user.create({ data: payload });

      // return response
      delete response.hash;
      return response;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if ((error.code = 'P2002')) {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login({ email, password }: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) throw new UnauthorizedException();

    // TODO: Generate a JWT and return it here
    // instead of the user object
    return email;
  }

  signup(dto: SignupDto) {
    return dto;
  }
}

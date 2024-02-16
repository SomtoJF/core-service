import { Controller, Post, Body, Res } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Public()
  async login(@Body() dto: LoginDto, @Res() response: Response) {
    const data = await this.authService.login(dto);
    response.cookie('access_token', data.access_token, { httpOnly: true });
    response.send(data.user).status(200);
  }

  @Post('signup')
  @Public()
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }
}

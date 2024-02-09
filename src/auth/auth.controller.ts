import { Controller, Post, Body } from '@nestjs/common';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() dto: AuthDto) {
    const { email, password } = dto;
    return { email, password };
  }

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    const { email, password } = dto;
    return { email, password };
  }
}

import { Controller, Post, Body, Res } from '@nestjs/common';
import { SignupDto } from './dto';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @Public()
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }
}

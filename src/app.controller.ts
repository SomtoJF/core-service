import { Controller, Get } from '@nestjs/common';
import { Public } from './decorators/public';

@Controller()
export class AppController {
  @Get()
  @Public()
  signup() {
    return 'Welcome to academia';
  }
}

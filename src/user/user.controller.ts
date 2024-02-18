import { Controller, Post, Body, Res } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';
import { Public } from '../decorators/public';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  @Public()
  signup(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
}

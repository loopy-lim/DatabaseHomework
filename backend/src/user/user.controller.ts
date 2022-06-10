import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  saveUser(@Query('name') name): string {
    this.userService.saveUser(name);
    return 'success';
  }
}

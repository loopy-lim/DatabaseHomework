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

  @Get('findAll')
  async findAll(): Promise<string> {
    const datas = await this.userService.findAll();
    let result = '';
    datas.forEach((user) => {
      result += `${user.userName}, ${user.userPk}, ${user.inspireDate}\n`;
    });
    return result;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get('')
  public getUsersList() {
    return this._usersService.getUsers();
  }

  @Post('new')
  public createUser(@Body() user: User) {
    console.log(`>>> RECEIVED USER`);
    console.log(user);
    return this._usersService.createUser(user);
  }
}

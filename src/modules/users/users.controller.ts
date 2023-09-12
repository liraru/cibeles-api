import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get('')
  public getUsersList() {
    return this._usersService.getUsers();
  }

  @Get('find/:id')
  public getUserById(@Param('id') userId: number) {
    return this._usersService.getUserById(userId);
  }

  @Post('new')
  public createUser(@Body() user: User) {
    return this._usersService.createUser(user);
  }
}

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import { RequestErrorManagerService } from 'src/services/request-error-manager/request-error-manager.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly _usersService: UsersService,
    private readonly _requestErrorManagerService: RequestErrorManagerService
  ) {}

  @Get('')
  getUsersList() {
    return this._usersService.getUsers();
  }

  @Get('find/:id')
  getUserById(@Param('id') userId: number) {
    if (typeof userId !== 'number') {
      this._requestErrorManagerService.invalidId();
    }
    return this._usersService.getUserById(userId);
  }

  @Post('new')
  createUser(@Body() user: User) {
    return this._usersService.createUser(user);
  }

  @Put('update')
  updateUser(@Body() user: User) {
    return this._usersService.updateUser(user);
  }

  @Put('change-status')
  changeUserStatus(@Body() data: { userId: number; isActive: boolean }) {
    return this._usersService.changeUserStatus(data.userId, data.isActive);
  }
}

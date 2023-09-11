import { Module } from '@nestjs/common';
import { UserQueryBuilderService } from './services/user-query-builder.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, UserQueryBuilderService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { RequestErrorManagerService } from 'src/services/request-error-manager/request-error-manager.service';
import { UserQueryBuilderService } from './services/user-query-builder.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, UserQueryBuilderService, RequestErrorManagerService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}

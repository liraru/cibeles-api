import { Module } from '@nestjs/common';
import { UserValidationService } from 'src/modules/users/services/user-validation/user-validation.service';
import { RequestErrorManagerService } from 'src/services/request-error-manager/request-error-manager.service';
import { UserQueryBuilderService } from './services/user-query-builder/user-query-builder.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, UserQueryBuilderService, RequestErrorManagerService, UserValidationService],
  controllers: [UsersController],
  exports: [UsersService, UserValidationService, UserQueryBuilderService]
})
export class UsersModule {}

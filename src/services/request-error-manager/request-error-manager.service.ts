import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class RequestErrorManagerService {
  invalidId(): HttpException {
    throw new HttpException(
      {
        status: HttpStatus.NOT_ACCEPTABLE,
        error: 'Invalid user ID'
      },
      HttpStatus.NOT_ACCEPTABLE
    );
  }
}

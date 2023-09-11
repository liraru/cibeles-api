import { Test, TestingModule } from '@nestjs/testing';
import { UserQueryBuilderService } from './user-query-builder.service';

describe('UserQueryBuilderService', () => {
  let service: UserQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserQueryBuilderService],
    }).compile();

    service = module.get<UserQueryBuilderService>(UserQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { RequestErrorManagerService } from './request-error-manager.service';

describe('RequestErrorManagerService', () => {
  let service: RequestErrorManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestErrorManagerService],
    }).compile();

    service = module.get<RequestErrorManagerService>(RequestErrorManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

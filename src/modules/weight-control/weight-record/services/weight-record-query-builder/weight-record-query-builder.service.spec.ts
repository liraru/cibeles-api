import { Test, TestingModule } from '@nestjs/testing';
import { WeightRecordQueryBuilderService } from './weight-record-query-builder.service';

describe('WeightRecordQueryBuilderService', () => {
  let service: WeightRecordQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeightRecordQueryBuilderService],
    }).compile();

    service = module.get<WeightRecordQueryBuilderService>(WeightRecordQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

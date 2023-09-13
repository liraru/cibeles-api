import { Test, TestingModule } from '@nestjs/testing';
import { WeightCycleQueryBuilderService } from './weight-cycle-query-builder.service';

describe('WeightCycleQueryBuilderService', () => {
  let service: WeightCycleQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeightCycleQueryBuilderService],
    }).compile();

    service = module.get<WeightCycleQueryBuilderService>(WeightCycleQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

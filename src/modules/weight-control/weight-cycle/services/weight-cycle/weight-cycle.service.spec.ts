import { Test, TestingModule } from '@nestjs/testing';
import { WeightCycleService } from './weight-cycle.service';

describe('WeightCycleService', () => {
  let service: WeightCycleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeightCycleService],
    }).compile();

    service = module.get<WeightCycleService>(WeightCycleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

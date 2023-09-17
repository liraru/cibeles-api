import { Test, TestingModule } from '@nestjs/testing';
import { WeightCycleValidationService } from './weight-cycle-validation.service';

describe('WeightCycleValidationService', () => {
  let service: WeightCycleValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeightCycleValidationService],
    }).compile();

    service = module.get<WeightCycleValidationService>(WeightCycleValidationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

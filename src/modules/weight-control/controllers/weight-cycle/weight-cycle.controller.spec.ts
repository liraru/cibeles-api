import { Test, TestingModule } from '@nestjs/testing';
import { WeightCycleController } from './weight-cycle.controller';

describe('WeightCycleController', () => {
  let controller: WeightCycleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeightCycleController],
    }).compile();

    controller = module.get<WeightCycleController>(WeightCycleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

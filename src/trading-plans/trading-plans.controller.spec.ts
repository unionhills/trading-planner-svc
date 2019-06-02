import { Test, TestingModule } from '@nestjs/testing';
import { TradingPlansController } from './trading-plans.controller';

describe('TradingPlans Controller', () => {
  let controller: TradingPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradingPlansController],
    }).compile();

    controller = module.get<TradingPlansController>(TradingPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

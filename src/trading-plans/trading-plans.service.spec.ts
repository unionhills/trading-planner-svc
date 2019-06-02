import { Test, TestingModule } from '@nestjs/testing';
import { TradingPlansService } from './trading-plans.service';

describe('TradingPlansService', () => {
  let service: TradingPlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TradingPlansService],
    }).compile();

    service = module.get<TradingPlansService>(TradingPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TradingPlansService } from './trading-plans.service';
import { TRADING_PLANS_REPOSITORY_INTERFACE_PROVIDER } from './trading-plans.repo';
import { TradingPlansInMemoryRepository } from './trading-plans.inmem.repo';
import { TradingPlan } from './model/trading-plan.model';
import { TradingPlanDto } from './dto/trading-plan.dto';
import { TrendOutlook, OrderStatus } from './trading-plan.enum';

describe('TradingPlansService', () => {
  let service: TradingPlansService;

  beforeEach(async () => {

    const tradingPlansRepoProvider: Provider = {
      provide: TRADING_PLANS_REPOSITORY_INTERFACE_PROVIDER,
      useClass: TradingPlansInMemoryRepository,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [TradingPlansService, tradingPlansRepoProvider]
    }).compile();

    service = module.get<TradingPlansService>(TradingPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be be able to create a trading plan', () => {
    const tradingPlanDto: TradingPlanDto = JSON.parse('{ \
      "id": "1", \
      "underlying": "MSFT" \
    }');

    const tradingPlan: TradingPlan = service.create(tradingPlanDto);

    /*
     * WTF... this doesn't work but the above does!!!

    const altTradingPlanDto = { id: "1", underlying: "MSFT" };
    const altTradingPlan: TradingPlan = service.create(altTradingPlanDto);
     */

    expect(tradingPlan.id.length).toBeGreaterThan(0);
  });

  it('should be able to get all trading plans', () => {
    const tradingPlanDto: TradingPlanDto = JSON.parse('{ \
      "id": "1", \
      "underlying": "MSFT" \
    }');

    service.create(tradingPlanDto);

    service.findAll().subscribe((tradingPlans: TradingPlan[]) => {
      expect(tradingPlans.length).toBeGreaterThan(0);
    });
  });
});

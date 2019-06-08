import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TradingPlan } from './model/trading-plan.model';
import { TradingPlanDto } from './dto/trading-plan.dto'
import { TradingPlansRepository } from './trading-plans.repo';

@Injectable()
export class TradingPlansService {
  constructor(private readonly tradingPlansRepo: TradingPlansRepository) {}

  public findAll(): Observable<TradingPlan[]> {
    return this.tradingPlansRepo.findAll();
  }

  public findOne(id: string): TradingPlan {
    return this.tradingPlansRepo.findOne(id);
  }

  public create(tradingPlan: TradingPlanDto): TradingPlan {
    return this.tradingPlansRepo.create(tradingPlan);
  }

  public update(id: string, tradingPlan: TradingPlanDto): TradingPlan {
    return this.tradingPlansRepo.update(id, tradingPlan);
  }

  public delete(id: string) {
    return this.tradingPlansRepo.delete(id);
  }
}

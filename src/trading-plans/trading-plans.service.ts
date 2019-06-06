import { Injectable } from '@nestjs/common';
import { TradingPlan } from 'models';
import { TradingPlansRepository } from './trading-plans.repo';

@Injectable()
export class TradingPlansService {
    constructor(
        private readonly tradingPlanRepo: TradingPlansRepository
    ) { }

    public getTradingPlans(): TradingPlan[] {
        return this.tradingPlanRepo.findAll();
    }

    public getTradingPlan(id: number): TradingPlan {
        return this.tradingPlanRepo.findOne(id);
    }
}

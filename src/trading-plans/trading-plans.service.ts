import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TradingPlan } from 'models';
import { TradingPlansRepository } from './trading-plans.repo';

@Injectable()
export class TradingPlansService {
    constructor(
        private readonly tradingPlansRepo: TradingPlansRepository
    ) { }

    public findAll(): Observable<TradingPlan[]> {
        return this.tradingPlansRepo.findAll();
    }

    public findOne(id: string): TradingPlan {
        return this.tradingPlansRepo.findOne(id);
    }
}

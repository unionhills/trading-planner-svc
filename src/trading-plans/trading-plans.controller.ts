import { Controller, Get, Param } from '@nestjs/common';
import { TradingPlan } from '../shared/models/trading-plan.model';
//import { TradingPlan } from 'models';
import { Observable } from 'rxjs';
import { TradingPlansService } from './trading-plans.service'

@Controller('trading-plans')
export class TradingPlansController {
    constructor (
        private readonly tradingPlansService: TradingPlansService
    ) { }

    @Get()
    findAll(): Observable<TradingPlan[]> {
        return this.tradingPlansService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): TradingPlan {
        return this.tradingPlansService.findOne(id);
    }
}

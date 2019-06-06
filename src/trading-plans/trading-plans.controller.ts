import { Controller, Get, Param } from '@nestjs/common';
import { TradingPlan } from 'models';
import { TradingPlansService } from './trading-plans.service'

@Controller('trading-plans')
export class TradingPlansController {
    constructor (
        private readonly tradingPlansService: TradingPlansService
    ) { }

    @Get()
    async findAll() {
        return await this.tradingPlansService.getTradingPlans();
    }
}

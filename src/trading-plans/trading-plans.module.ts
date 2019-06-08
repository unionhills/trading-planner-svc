import { Module } from '@nestjs/common';
import { TradingPlansController } from './trading-plans.controller';
import { TradingPlansService } from './trading-plans.service';
import { TradingPlansRepository } from './trading-plans.repo';

@Module({
  controllers: [TradingPlansController],
  providers: [TradingPlansService, TradingPlansRepository],
})
export class TradingPlansModule {}

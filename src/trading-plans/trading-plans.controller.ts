import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TradingPlan } from './model/trading-plan.model';
import { TradingPlanDto } from './dto/trading-plan.dto';
import { Observable } from 'rxjs';
import { TradingPlansService } from './trading-plans.service';

@Controller('trading-plans')
export class TradingPlansController {
  constructor(private readonly tradingPlansService: TradingPlansService) {}

  @Get()
  findAll(): Observable<TradingPlan[]> {
    return this.tradingPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): TradingPlan {
    return this.tradingPlansService.findOne(id);
  }

  @Post()
  create(@Body() createTradingPlanDto: TradingPlanDto): TradingPlan {
    return this.tradingPlansService.create(createTradingPlanDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTradingPlanDto: TradingPlanDto): TradingPlan {
    return this.tradingPlansService.update(id, updateTradingPlanDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tradingPlansService.delete(id);
  }
}

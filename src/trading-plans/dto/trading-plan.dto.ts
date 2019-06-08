import { TrendOutlook, OrderStatus } from '../trading-plan.enum';

/**
 * This class represents the concept of a Trading Plan in
 * our application.  A Trading Plan allows a trader to
 * plan out a trade.
 *
 * @author Union Hills Software
 * @date   May 26, 2019
 *
 */

export class TradingPlanDto {
  // For a stock, the underlying and symbol should be the same.
  // For options, the underlying would be the stock symbol
  // whilst the symbol would be the option symbol
  readonly underlying: String;
  readonly underlyingDescription: String;

  readonly marketOutlook: String;
  readonly marketTrend: TrendOutlook;

  readonly underlyingOutlook: String;
  readonly underlyingTrend: TrendOutlook;

  readonly timeFrame: String;
  readonly strategy: String;

  readonly costPerContract: Number;
  readonly numberOfContracts: Number;

  readonly stopLoss: Number;
  readonly technicalStopLoss: Number;

  readonly timeStop: Date;

  readonly limit: Number;
  readonly technicalLimit: Number;

  readonly plannedTradeEntryDate: Date;
  readonly plannedTradeExitDate: Date;

  readonly entryReason: String;
  readonly contingencies: String;

  readonly status: OrderStatus;
  readonly notes: String;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

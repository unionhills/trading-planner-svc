import { Trackable } from '../../shared';
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

export class TradingPlan implements Trackable {
  id?: string;

  // For a stock, the underlying and symbol should be the same.
  // For options, the underlying would be the stock symbol
  // whilst the symbol would be the option symbol
  underlying: String;
  underlyingDescription: String;

  marketOutlook: String;
  marketTrend: TrendOutlook;

  underlyingOutlook: String;
  underlyingTrend: TrendOutlook;

  timeFrame: String;
  strategy: String;

  costPerContract: Number;
  numberOfContracts: Number;

  stopLoss: Number;
  technicalStopLoss: Number;

  timeStop: Date;

  limit: Number;
  technicalLimit: Number;

  plannedTradeEntryDate: Date;
  plannedTradeExitDate: Date;

  entryReason: String;
  contingencies: String;

  status: OrderStatus;
  notes: String;

  createdAt: Date;
  updatedAt: Date;
}

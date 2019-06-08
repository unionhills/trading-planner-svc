import * as _ from 'lodash';
import { Observable, of } from 'rxjs';
import { TradingPlan } from './model/trading-plan.model';
import { Injectable } from '@nestjs/common';

/**
 * This class handles the CRUD operations to our persistence store
 * for Reading Logs.
 *
 * @author Union Hills Software
 * @date   December 16, 2018
 *
 */

@Injectable()
export class TradingPlansRepository {
  private fs = require('fs');
  private tradingPlanDb: TradingPlan[] = new Array<TradingPlan>();

  constructor() {
    this.loadMockDb();
  }

  /**
   * We're using a simple JSON file in place of an actual database for the
   * time being.
   *
   */
  private loadMockDb() {
    this.fs.readFile(
      './src/trading-plans/trading-plans.mockdb.json',
      (err: any, data: any) => {
        if (err) throw err;

        this.tradingPlanDb = JSON.parse(data);
      },
    );
  }

  public findAll(): Observable<TradingPlan[]> {
    return of(this.tradingPlanDb);
  }

  public findOne(id: string): TradingPlan {
    return _.find(this.tradingPlanDb, (plan: TradingPlan) => plan.id === id);
  }
}

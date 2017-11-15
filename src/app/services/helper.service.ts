import {ExpenseType} from '../shared/model/expense-type.model';
import {ExpensePeriod} from '../shared/model/expense-period.model';
import {EXPENSE_TYPES} from "../mock-data/mock-expense-type";
import {EXPENSE_PERIODS} from "../mock-data/mock-expense-periods";
export class HelperService {

  getExpenseTypes() {
    return EXPENSE_TYPES.slice();
  }

  getExpensePeriods() {
    return EXPENSE_PERIODS.slice();
  }

  getDefaultExpenseType() {
    let defaultType;
    this.getExpenseTypes().forEach(type => {
      if (type.defaultValue) {
        defaultType = type;
      }
    });
    return defaultType;
  }

  getDefaultExpensePeriod() {
    let defaultType;
    this.getExpensePeriods().forEach(type => {
      if (type.defaultValue) {
        defaultType = type;
      }
    });
    return defaultType;
  }

  getExpenseTypeByKey(key: number) {
    let theExpenseType;
    this.getExpenseTypes().forEach(type => {
      if (type.key === key) {
        theExpenseType = type;
      }
    });
    return theExpenseType;
  }

  getExpensePeriodByKey(key: number) {
    let theExpensePeriod;
    this.getExpensePeriods().forEach(type => {
      if (type.key === key) {
        theExpensePeriod = type;
      }
    });
    return theExpensePeriod;
  }
}

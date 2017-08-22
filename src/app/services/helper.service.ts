import {ExpenseType} from '../model/expense-type.model';
import {ExpensePeriod} from '../model/expense-period.model';
export class HelperService {
  expenseTypes: ExpenseType[] = [
    {
      'key': 0,
      'value': 'Undefined',
      'defaultValue': true
    },
    {
      'key': 1,
      'value': 'Combustible',
      'defaultValue': false
    },
    {
      'key': 2,
      'value': 'Material Informatico',
      'defaultValue': false
    }
  ];
  expensePeriods: ExpensePeriod[] = [
    {
      'key': 0,
      'value': 'Undefined',
      'defaultValue': false
    },
    {
      'key': 1,
      'value': 'Gasto Corriente',
      'defaultValue': true
    },
    {
      'key': 2,
      'value': 'Gasto de Inversion',
      'defaultValue': false
    }
  ];

  getExpenseTypes() {
    return this.expenseTypes.slice();
  }

  getExpensePeriods() {
    return this.expensePeriods.slice();
  }

  getDefaultExpenseType() {
    let defaultType;
    this.expenseTypes.forEach(type => {
      if (type.defaultValue) {
        defaultType = type;
      }
    });
    return defaultType;
  }

  getDefaultExpensePeriod() {
    let defaultType;
    this.expensePeriods.forEach(type => {
      if (type.defaultValue) {
        defaultType = type;
      }
    });
    return defaultType;
  }

  getExpenseTypeByKey(key: number) {
    let theExpenseType;
    this.expenseTypes.forEach(type => {
      if (type.key === key) {
        theExpenseType = type;
      }
    });
    return theExpenseType;
  }

  getExpensePeriodByKey(key: number) {
    let theExpensePeriod;
    this.expensePeriods.forEach(type => {
      if (type.key === key) {
        theExpensePeriod = type;
      }
    });
    return theExpensePeriod;
  }
}

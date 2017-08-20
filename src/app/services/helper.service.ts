export class HelperService {
  expenseTypes = [
    {
      'key': '0',
      'name': 'Undefined',
      'default': true
    },
    {
      'key': '1',
      'name': 'Combustible',
      'default': false
    },
    {
      'key': '2',
      'name': 'Material Informatico',
      'default': false
    }
  ];
  expensePeriods = [
    {
      'key': '0',
      'name': 'Undefined',
      'default': false
    },
    {
      'key': '1',
      'name': 'Gasto Corriente',
      'default': true
    },
    {
      'key': '2',
      'name': 'Gasto de Inversion',
      'default': false
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
      if (type.default) {
        defaultType = type;
      }
    });
    return defaultType;
  }

  getDefaultExpensePeriod() {
    let defaultType;
    this.expensePeriods.forEach(type => {
      if (type.default) {
        defaultType = type;
      }
    });
    return defaultType;
  }
}

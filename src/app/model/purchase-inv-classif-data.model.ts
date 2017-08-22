import {ExpenseType} from './expense-type.model';
import {ExpensePeriod} from './expense-period.model';

export class PurchaseInvClassifData {
  public id: number;
  public expenseType: ExpenseType;
  public applyToVat: boolean;
  public expensePeriod: ExpensePeriod;
  public amortizationPolicy: string;
  public annualAmortPercentage: number;

  constructor(id: number, expenseType: ExpenseType, applyToVat: boolean, expensePeriod: ExpensePeriod,
              amortizationPolicy: string, annualAmortPercentage: number) {
    this.id = id;
    this.expenseType = expenseType;
    this.applyToVat = applyToVat;
    this.expensePeriod = expensePeriod;
    this.amortizationPolicy = amortizationPolicy;
    this.annualAmortPercentage = annualAmortPercentage;
  }
}

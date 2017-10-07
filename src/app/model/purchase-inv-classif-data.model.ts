import {ExpenseType} from './expense-type.model';
import {ExpensePeriod} from './expense-period.model';
import {PurchaseInvoice} from './purchase-invoice.model';

export class PurchaseInvClassifData {
  public invoiceId: number;
  // public purchaseInvoice: PurchaseInvoice;
  public expenseType: ExpenseType;
  public vatApplicable: boolean;
  public vatPercentageApplicable: number;
  public expensePeriod: ExpensePeriod;
  public amortizationPolicy: string;
  public annualAmortPercentage: number;

  constructor(invoiceId: number, expenseType: ExpenseType, vatApplicable: boolean, vatPercentageApplicable: number,
              expensePeriod: ExpensePeriod, amortizationPolicy: string, annualAmortPercentage: number) {
    this.invoiceId = invoiceId;
    // this.purchaseInvoice = purchaseInvoice;
    this.expenseType = expenseType;
    this.vatApplicable = vatApplicable;
    this.vatPercentageApplicable = vatPercentageApplicable;
    this.expensePeriod = expensePeriod;
    this.amortizationPolicy = amortizationPolicy;
    this.annualAmortPercentage = annualAmortPercentage;
  }
}

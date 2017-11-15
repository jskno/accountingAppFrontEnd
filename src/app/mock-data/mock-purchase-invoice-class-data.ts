import {PurchaseInvClassifData} from '../purchase-invoices/model/purchase-inv-classif-data.model';
import {ExpenseType} from '../shared/model/expense-type.model';

export const PURCHASE_INV_CLASS_DATA: PurchaseInvClassifData[] = [
    new PurchaseInvClassifData(
      1,
      new ExpenseType(1, 'Combustible', false),
      true,
      100,
      new ExpenseType(1, 'Combustible', false),
      'Amortizacion acelerada',
      32
    ),
    new PurchaseInvClassifData(
      2,
      new ExpenseType(2, 'Material Informatico', false),
      true,
      100,
      new ExpenseType(2, 'Material Informatico', false),
      null,
      null
    ),
];

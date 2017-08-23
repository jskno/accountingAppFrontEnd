import {PurchaseInvClassifData} from '../model/purchase-inv-classif-data.model';
import {ExpenseType} from '../model/expense-type.model';

export const PURCHASE_INV_CLASS_DATA: PurchaseInvClassifData[] = [
    new PurchaseInvClassifData(
      1,
      new ExpenseType(1, 'Combustible', false),
      true,
      new ExpenseType(1, 'Combustible', false),
      'Amortizacion acelerada',
      32
    ),
    new PurchaseInvClassifData(
      2,
      new ExpenseType(2, 'Material Informatico', false),
      true,
      new ExpenseType(2, 'Material Informatico', false),
      null,
      null
    ),
];

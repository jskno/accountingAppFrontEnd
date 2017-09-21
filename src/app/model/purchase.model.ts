import {PurchaseInvoice} from './purchase-invoice.model';
import {PurchaseInvClassifData} from './purchase-inv-classif-data.model';

export class Purchase {
  public purchaseInvoice: PurchaseInvoice;
  public purchaseInvClassifData: PurchaseInvClassifData;

  constructor(purchaseInvoice: PurchaseInvoice, purchaseInvClassifData: PurchaseInvClassifData) {
    this.purchaseInvoice = purchaseInvoice;
    this.purchaseInvClassifData = purchaseInvClassifData;
  }
}

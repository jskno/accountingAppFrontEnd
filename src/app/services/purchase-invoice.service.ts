import {PurchaseInvoice} from '../model/purchase-invoice.model';

export class PurchaseInvoiceService {
  private purchaseInvoices: PurchaseInvoice[] = [
    new PurchaseInvoice(
      1,
      '1',
      new Date(),
      'A000001',
      100,
      21
    ),
    new PurchaseInvoice(
      2,
      '2',
      new Date(),
      'A000002',
      200,
      21
    ),
  ];

  getPurchaseInvoices() {
    return this.purchaseInvoices.slice();
  }

  getPurchaseInvoice(id: number) {
    let theInvoice = null;
    this.purchaseInvoices.forEach((invoice) => {
      if (invoice.id === id) {
        theInvoice = invoice;
      }
    })
    return theInvoice;
  }
}

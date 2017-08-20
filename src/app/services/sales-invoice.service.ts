import {SalesInvoice} from '../model/sales-invoice.model';

export class SalesInvoiceService {
  private salesInvoices: SalesInvoice[] = [
    new SalesInvoice(
      1,
      '1',
      new Date(),
      'A000001',
      100,
      21
    ),
    new SalesInvoice(
      2,
      '2',
      new Date(),
      'A000002',
      200,
      21
    ),
  ];

  getSalesInvoices() {
    return this.salesInvoices.slice();
  }

  getSalesInvoice(id: number) {
    let theInvoice = null;
    this.salesInvoices.forEach((invoice) => {
      if (invoice.id === id) {
        theInvoice = invoice;
      }
    })
    return theInvoice;
  }
}

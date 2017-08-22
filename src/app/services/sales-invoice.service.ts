import {SalesInvoice} from '../model/sales-invoice.model';
import {Injectable} from '@angular/core';
import {CompanyService} from './company.service';

@Injectable()
export class SalesInvoiceService {
  private salesInvoices: SalesInvoice[] = [
    new SalesInvoice(
      1,
      '1',
      new Date(),
      this.companyService.getCompanyByCif('A000001'),
      100,
      21
    ),
    new SalesInvoice(
      2,
      '2',
      new Date(),
      this.companyService.getCompanyByCif('A000003'),
      200,
      21
    ),
  ];

  constructor(private companyService: CompanyService) {}

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

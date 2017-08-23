import {SalesInvoice} from '../model/sales-invoice.model';
import {Injectable} from '@angular/core';
import {CompanyService} from './company.service';
import {SALES_INVOICES} from '../mock-data/mock-sales-invoices';

@Injectable()
export class SalesInvoiceService {

  constructor(private companyService: CompanyService) {}

  getSalesInvoices(): Promise<SalesInvoice[]> {
    return Promise.resolve(SALES_INVOICES.slice());
  }

  getSalesInvoice(id: number) {
    let theInvoice = null;
    this.getSalesInvoices().then(
      invoices => invoices.forEach((invoice) => {
        if (invoice.id === id) {
          theInvoice = invoice;
        }
      })
    );
    return theInvoice;
  }
}

import {SalesInvoice} from '../sales-invoices/model/sales-invoice.model';
import {Injectable} from '@angular/core';
import {CompanyService} from './company.service';
import {SALES_INVOICES} from '../mock-data/mock-sales-invoices';
import {Http} from '@angular/http';
import {AbstractService} from './abstract.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SalesInvoiceService extends AbstractService {
  FETCH_INVOICES = '/invoice/sales/all';
  FETCH_INVOICE_BY_ID = '/invoice/sales';
  SAVE_SALES_INVOICE = '/invoice/sales/new';

  constructor(private companyService: CompanyService,
              private http: Http) {
    super();
  }

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

  fetchSalesInvoices() {
    return this.http
      .get(this.BASEURL + this.FETCH_INVOICES)
      .map(response => {
        const data = response.json() as SalesInvoice[];
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  fetchSalesInvoiceById(id: number) {
    const params = new URLSearchParams();
    params.set('id', id.toString());
    return this.http
      .get(this.BASEURL + this.FETCH_INVOICE_BY_ID + id, this.options)
      .map(response => {
        const data = response.json() as SalesInvoice;
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  save(salesInvoice: SalesInvoice) {
    return this.http
      .post(this.BASEURL + this.SAVE_SALES_INVOICE, salesInvoice, this.options)
      .map(response => {
        const data = response.json();
        return data || {};
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  getEmptySalesInvoice() {
    return new SalesInvoice(null, null, null, null, null, null, null, null);
  }
}

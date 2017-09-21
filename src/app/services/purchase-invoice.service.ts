import {PurchaseInvoice} from '../model/purchase-invoice.model';
import {Injectable} from '@angular/core';
import {CompanyService} from './company.service';
import {PurchaseInvClassifData} from '../model/purchase-inv-classif-data.model';
import {HelperService} from './helper.service';
import {PURCHASE_INVOICES} from '../mock-data/mock-purchase-invoices';
import {PURCHASE_INV_CLASS_DATA} from '../mock-data/mock-purchase-invoice-class-data';
import {Purchase} from '../model/purchase.model';
import {Http} from '@angular/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PurchaseInvoiceService extends AbstractService {
  FETCH_INVOICES = '/invoice/purchase/all';
  FETCH_INVOICE_BY_ID = '/invoice/purchase';
  SAVE_PURCHASE = '/invoice/purchase/new';

  constructor(private companyService: CompanyService,
              private helperService: HelperService,
              private http: Http) {
    super();
  }

  getPurchaseInvoices() {
    return Promise.resolve(PURCHASE_INVOICES.slice());
  }

  getPurchaseInvoicesClassData() {
    return Promise.resolve(PURCHASE_INV_CLASS_DATA.slice());
  }

  getPurchaseInvoice(id: number) {
    let theInvoice = null;
    this.getPurchaseInvoices().then(
      invoices => invoices.forEach((invoice) => {
        if (invoice.id === id) {
          theInvoice = invoice;
        }
      })
    )
    return theInvoice;
  }

  getPurchaseInvoiceClassData(id: number) {
    let theInvoiceClassData = null;
    this.getPurchaseInvoicesClassData().then(
      invoicesClass => invoicesClass.forEach((invoice) => {
        if (invoice.id === id) {
          theInvoiceClassData = invoice;
        }
      })
    );
    return theInvoiceClassData;
  }

  fetchPurchases() {
    return this.http
      .get(this.BASEURL + this.FETCH_INVOICES)
      .map(response => {
        const data = response.json() as Purchase[];
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  fetchPurchaseById(id: number) {
    const params = new URLSearchParams();
    params.set('id', id.toString());
    return this.http
      .get(this.BASEURL + this.FETCH_INVOICE_BY_ID + id, this.options)
      .map(response => {
        const data = response.json() as Purchase;
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  save(purchase: Purchase) {
    return this.http.post(this.BASEURL + this.SAVE_PURCHASE, purchase, this.options)
      .map(response => {
        const data = response.json();
        return data || {};
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      )
  }

  getEmptyPurhcase() {
    return new Purchase(this.getEmptyPurchaseInvoice(), this.getEmptyPurchaseInvClassifData());
  }

  getEmptyPurchaseInvoice() {
    return new PurchaseInvoice(null, null, null, null, null, null, null, null);
  }

  getEmptyPurchaseInvClassifData() {
    return new PurchaseInvClassifData(null, null, null, null, null, null);
  }
}

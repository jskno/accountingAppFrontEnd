import {PurchaseInvoice} from '../model/purchase-invoice.model';
import {Injectable} from '@angular/core';
import {CompanyService} from './company.service';
import {PurchaseInvClassifData} from '../model/purchase-inv-classif-data.model';
import {HelperService} from './helper.service';
import {PURCHASE_INVOICES} from "../mock-data/mock-purchase-invoices";
import {PURCHASE_INV_CLASS_DATA} from "../mock-data/mock-purchase-invoice-class-data";

@Injectable()
export class PurchaseInvoiceService {

  constructor(private companyService: CompanyService,
              private helperService: HelperService) {}

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
}

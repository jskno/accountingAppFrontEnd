import {PurchaseInvoice} from '../model/purchase-invoice.model';
import {Injectable} from '@angular/core';
import {CompanyService} from './company.service';
import {PurchaseInvClassifData} from '../model/purchase-inv-classif-data.model';
import {HelperService} from './helper.service';

@Injectable()
export class PurchaseInvoiceService {
  private purchaseInvoices: PurchaseInvoice[] = [
    new PurchaseInvoice(
      1,
      '1',
      new Date(),
      this.companyService.getCompanyByCif('A000001'),
      100,
      21
    ),
    new PurchaseInvoice(
      2,
      '2',
      new Date(),
      this.companyService.getCompanyByCif('A000002'),
      200,
      21
    ),
  ];

  private purchaseInvoicesClassData: PurchaseInvClassifData[] = [
    new PurchaseInvClassifData(
      1,
      this.helperService.getExpensePeriodByKey(1),
      true,
      this.helperService.getExpensePeriodByKey(1),
      'Amortizacion acelerada',
      32
    ),
    new PurchaseInvClassifData(
      2,
      this.helperService.getExpensePeriodByKey(2),
      true,
      this.helperService.getExpensePeriodByKey(2),
      null,
      null
    ),
  ];

  constructor(private companyService: CompanyService,
              private helperService: HelperService) {}

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

  getPurchaseInvoiceClassData(id: number) {
    let theInvoiceClassData = null;
    this.purchaseInvoices.forEach((invoice) => {
      if (invoice.id === id) {
        theInvoiceClassData = invoice;
      }
    })
    return theInvoiceClassData;
  }
}

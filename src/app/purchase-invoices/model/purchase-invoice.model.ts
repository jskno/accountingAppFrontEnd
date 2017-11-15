import {Company} from '../../companies/model/company.model';
import {Invoice} from '../../shared/model/invoice.model';
import {PurchaseInvClassifData} from './purchase-inv-classif-data.model';

export class PurchaseInvoice extends Invoice {
  public id: number;
  public purchaseInvClassifData: PurchaseInvClassifData;

  constructor(id: number, invoiceNumber: string, date: Date, company: Company, amount: number,
                vatPercentage: number, vatAmount: number, totalInvoice: number) {
    super(invoiceNumber, date, company, amount, vatPercentage, vatAmount, totalInvoice);
    this.id = id;
  }

}

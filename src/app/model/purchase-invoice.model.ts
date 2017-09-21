import {Company} from './company.model';
import {Invoice} from './invoice.model';
export class PurchaseInvoice extends Invoice {
  public id: number;

  constructor(id: number, invoiceNumber: string, date: Date, company: Company, amount: number,
                vatPercentage: number, vatAmount: number, totalInvoice: number) {
    super(invoiceNumber, date, company, amount, vatPercentage, vatAmount, totalInvoice);
    this.id = id;
  }

}

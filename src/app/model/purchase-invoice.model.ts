import {Company} from './company.model';
export class PurchaseInvoice {
  public id: number;
  public invoiceNumber: string;
  public date: Date;
  public company: Company;
  public amount: number;
  public vat: number;

  constructor(id: number, invoiceNumber: string, date: Date, company: Company, amount: number, vat: number) {
    this.id = id;
    this.invoiceNumber = invoiceNumber;
    this.date = date;
    this.company = company;
    this.amount = amount;
    this.vat = vat;
  }

}

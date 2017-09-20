import {Company} from './company.model';
export class SalesInvoice {
  public id: number;
  public invoiceNumber: string;
  public date: Date;
  public company: Company;
  public amount: number;
  public vatPercentage: number;
  public vatAmount: number;
  public totalInvoice: number;

  constructor(id: number, invoiceNumber: string, date: Date, company: Company, amount: number,
              vatPercentage: number, vatAmount: number, totalInvoice: number) {
    this.id = id;
    this.invoiceNumber = invoiceNumber;
    this.date = date;
    this.company = company;
    this.amount = amount;
    this.vatPercentage = vatPercentage;
    this.vatAmount = vatAmount;
    this.totalInvoice = totalInvoice;
  }

}

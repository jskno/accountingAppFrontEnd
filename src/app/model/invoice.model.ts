import {Company} from './company.model';

export abstract class Invoice {
  public invoiceNumber: string;
  public date: Date;
  public company: Company;
  public amount: number;
  public vatPercentage: number;
  public vatAmount: number;
  public totalInvoice: number;

  constructor(invoiceNumber: string, date: Date, company: Company, amount: number,
              vatPercentage: number, vatAmount: number, totalInvoice: number) {
    this.invoiceNumber = invoiceNumber;
    this.date = date;
    this.company = company;
    this.amount = amount;
    this.vatPercentage = vatPercentage;
    this.vatAmount = vatAmount;
    this.totalInvoice = totalInvoice;
  }
}

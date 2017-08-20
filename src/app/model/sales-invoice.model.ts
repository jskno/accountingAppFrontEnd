export class SalesInvoice {
  public id: number;
  public invoiceNumber: string;
  public date: Date;
  public cif: string;
  public amount: number;
  public iva: number;

  constructor(id: number, invoiceNumber: string, date: Date, cif: string, amount: number, iva: number) {
    this.id = id;
    this.invoiceNumber = invoiceNumber;
    this.date = date;
    this.cif = cif;
    this.amount = amount;
    this.iva = iva;
  }

}

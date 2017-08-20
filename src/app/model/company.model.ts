export class Company {
  public id: number;
  public name: string;
  public cif: string;
  public address: string;
  public telepone: string;
  public email: string;

  constructor(id: number, name: string, cif: string, address: string, telephone: string, email: string) {
    this.id = id;
    this.name = name;
    this.cif = cif;
    this.address = address;
    this.telepone = telephone;
    this.email = email;
  }
}

import {Company} from '../model/company.model';
import {Subject} from 'rxjs/Subject';
import {COMPANIES} from '../mock-data/mock-companies';

export class CompanyService {
  companiesChanged = new Subject();

  getCompanies(): Promise<Company[]> {
    return Promise.resolve(COMPANIES.slice());
  }

  getCompaniesSlowly(): Promise<Company[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 secs
      setTimeout(() =>
      resolve(this.getCompanies()), 2000);
    });
  }

  getCompanyById(id: number) {
    let theCompany = null;
    this.getCompanies().then(
        companies => companies.forEach(
          (company) => {
            if (company.id === id) {
              theCompany = company;
            }
        })
    );
    return theCompany;
  }

  getCompanyByCif(cif: string) {
    let theCompany = null;
    this.getCompanies().then(
      companies => companies.forEach(
        (company) => {
          if (company.cif === cif) {
            theCompany = company;
          }
      })
    );
    return theCompany;
  }

  save(company: Company) {
    if (company.id != null) {
      this.update(company);
    } else {
      this.add(company);
    }
    this.companiesChanged.next();
  }

  add(newCompany: Company) {
    newCompany.id = this.getLastId();
    COMPANIES.push(newCompany);
  }

  update(modifiedCompany: Company) {
    let oldCompany = this.getCompanyById(modifiedCompany.id);
    oldCompany = modifiedCompany;
  }

  getLastId() {
    return 4;
  }
}

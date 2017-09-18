import {Company} from '../model/company.model';
import {Subject} from 'rxjs/Subject';
import {COMPANIES} from '../mock-data/mock-companies';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CompanyService {
  companiesChanged = new Subject();

  constructor(private http: Http) {}

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
      this.addBE(company);
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

  fetchCompanies() {
    return this.http
      .get('http://localhost:8081/accounting/company/all')
      .map(response => {
        const data = response.json() as Company[];
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  fetchCompanyById(id: number) {
    const params = new URLSearchParams();
    params.set('id', id.toString());
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http
      .get('http://localhost:8081/accounting/company/' + id, options)
      .map(response => {
        const data = response.json() as Company;
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  addBE(newCompany: Company) {
    // newCompany.id = this.getLastId();
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http
      .post('http://localhost:8081/accounting/company/new', newCompany, options)
      .map(response => {
        const data = response.json();
        return data || {};
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  updateBE(modifiedCompany: Company) {
    let oldCompany = this.getCompanyById(modifiedCompany.id);
    oldCompany = modifiedCompany;
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  getEmptyCompany() {
    return new Company(null, null, null, null, null , null);
  }

}

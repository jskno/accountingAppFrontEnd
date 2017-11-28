import {Company} from '../companies/model/company.model';
import {Subject} from 'rxjs/Subject';
import {COMPANIES} from '../mock-data/mock-companies';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {AbstractService} from './abstract.service';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class CompanyService extends AbstractService {
  FETCH_COMPANIES = '/company/all';
  FETCH_COMPANY_BY_ID = '/company/';
  SAVE_COMPANY = '/company/new';
  companiesChanged = new Subject();

  constructor(private http: Http,
              protected authService: AuthService) {
    super(authService);
  }

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
      .get(this.BASEURL + this.FETCH_COMPANIES, this.options)
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
    return this.http
      .get(this.BASEURL + this.FETCH_COMPANY_BY_ID + id, this.options)
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
    return this.http
      .post(this.BASEURL + this.SAVE_COMPANY, newCompany, this.options)
      // .map(response => {
      //   const data = response.json();
      //   return data || {};
      // })
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

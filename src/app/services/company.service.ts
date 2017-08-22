import {Company} from '../model/company.model';
import {Subject} from 'rxjs/Subject';

export class CompanyService {
  companiesChanged = new Subject();
  companies: Company[] = [
    new Company(
      1,
      'AimHireRecruitment',
      'A000001',
      'Calle Aire',
      '32523532',
      'jskno@yahoo.es'
    ),
    new Company(
      2,
      'Euipo Restaurant',
      'A000002',
      'Calle Mar',
      '32523532',
      'alvaro@yahoo.es'
    ),
    new Company(
      3,
      'Petroprix',
      'A000003',
      'Calle Fuego',
      '32523532',
      'raquel@yahoo.es'
    )
  ];

  getCompanies() {
    return this.companies.slice();
  }

  getCompany(index: number) {
    return this.companies[index];
  }

  getCompanyByCif(cif: string) {
    let theCompany = null;
    this.getCompanies().forEach((company) => {
      if (company.cif === cif) {
        theCompany = company;
      }
    })
    return theCompany;
  }

  save(company: Company) {
    company.id = this.getLastId();
    this.companies.push(company);
    this.companiesChanged.next();
  }

  getLastId() {
    return 4;
  }
}

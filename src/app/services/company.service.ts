import {Company} from '../model/company.model';
import {Subject} from 'rxjs/Subject';

export class CompanyService {
  companiesChanged = new Subject();
  companies: Company[] = [
    new Company(
      1,
      'AimHireRecruitment',
      '24124qrqw',
      'Calle Aire',
      '32523532',
      'jskno@yahoo.es'
    ),
    new Company(
      2,
      'Euipo Restaurant',
      'asffasf323',
      'Calle Mar',
      '32523532',
      'alvaro@yahoo.es'
    ),
    new Company(
      3,
      'Petroprix',
      'B523532523',
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

  save(company: Company) {
    company.id = this.getLastId();
    this.companies.push(company);
    this.companiesChanged.next();
  }

  getLastId() {
    return 4;
  }
}

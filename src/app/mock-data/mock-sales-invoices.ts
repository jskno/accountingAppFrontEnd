import {SalesInvoice} from '../sales-invoices/model/sales-invoice.model';
import {Company} from '../companies/model/company.model';

export const SALES_INVOICES: SalesInvoice[] = [
    new SalesInvoice(
      1,
      '1',
      new Date(),
      new Company(
        1,
        'AimHireRecruitment',
        'A000001',
        'Calle Aire',
        '32523532',
        'jskno@yahoo.es'
      ),
      100,
      21,
      21,
      121
    ),
    new SalesInvoice(
      2,
      '2',
      new Date(),
      new Company(
        3,
        'Petroprix',
        'A000003',
        'Calle Fuego',
        '32523532',
        'raquel@yahoo.es'
      ),
      200,
      21,
      42,
      242
    ),
];

import {PurchaseInvoice} from '../model/purchase-invoice.model';
import {Company} from '../model/company.model';

export const PURCHASE_INVOICES: PurchaseInvoice[] = [
  new PurchaseInvoice(
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
  new PurchaseInvoice(
    2,
    '2',
    new Date(),
    new Company(
      2,
      'Euipo Restaurant',
      'A000002',
      'Calle Mar',
      '32523532',
      'alvaro@yahoo.es'
    ),
    200,
    21,
    21,
    121
  )
];

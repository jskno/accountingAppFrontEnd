import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalesInvoicesComponent} from './sales-invoices.component';
import {SalesInvoiceStartComponent} from './sales-invoice-start/sales-invoice-start.component';
import {SalesInvoiceEditComponent} from './sales-invoice-edit/sales-invoice-edit.component';
import {SalesInvoiceDetailComponent} from './sales-invoice-detail/sales-invoice-detail.component';

const salesInvoicesRoutes: Routes = [
  {path: 'sales', component: SalesInvoicesComponent, children: [
    {path: '', component: SalesInvoiceStartComponent},
    {path: 'new', component: SalesInvoiceEditComponent},
    {path: ':id', component: SalesInvoiceDetailComponent},
    {path: ':id/edit', component: SalesInvoiceEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(salesInvoicesRoutes)],
  exports: [RouterModule]
})
export class SalesInvoicesRoutingModule {}

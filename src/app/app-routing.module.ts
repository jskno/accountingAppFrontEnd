import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CompaniesComponent} from './companies/companies.component';
import {PurchaseInvoicesComponent} from './purchase-invoices/purchase-invoices.component';
import {SalesInvoicesComponent} from './sales-invoices/sales-invoices.component';
import {NgModule} from '@angular/core';
import {CompanyStartComponent} from './companies/company-start/company-start.component';
import {CompanyEditComponent} from './companies/company-edit/company-edit.component';
import {CompanyDetailComponent} from './companies/company-detail/company-detail.component';
import {PurchaseInvoiceEditComponent} from './purchase-invoices/purchase-invoice-edit/purchase-invoice-edit.component';
import {PurchaseInvoiceDetailComponent} from './purchase-invoices/purchase-invoice-detail/purchase-invoice-detail.component';
import {PurchaseInvoiceStartComponent} from './purchase-invoices/purchase-invoice-start/purchase-invoice-start.component';
import {SalesInvoiceEditComponent} from './sales-invoices/sales-invoice-edit/sales-invoice-edit.component';
import {SalesInvoiceDetailComponent} from './sales-invoices/sales-invoice-detail/sales-invoice-detail.component';
import {SalesInvoiceStartComponent} from './sales-invoices/sales-invoice-start/sales-invoice-start.component';

const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'companies', component: CompaniesComponent, children: [
    {path: '', component: CompanyStartComponent},
    {path: 'new', component: CompanyEditComponent},
    {path: ':id', component: CompanyDetailComponent},
    {path: ':id/edit', component: CompanyEditComponent}
  ]},
  {path: 'purchases', component: PurchaseInvoicesComponent, children: [
    {path: '', component: PurchaseInvoiceStartComponent},
    {path: 'new', component: PurchaseInvoiceEditComponent},
    {path: ':id', component: PurchaseInvoiceDetailComponent},
    {path: ':id/edit', component: PurchaseInvoiceEditComponent}
  ]},
  {path: 'sales', component: SalesInvoicesComponent, children: [
    {path: '', component: SalesInvoiceStartComponent},
    {path: 'new', component: SalesInvoiceEditComponent},
    {path: ':id', component: SalesInvoiceDetailComponent},
    {path: ':id/edit', component: SalesInvoiceEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


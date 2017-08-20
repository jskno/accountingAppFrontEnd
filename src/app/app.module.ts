import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import {CompaniesComponent} from './companies/companies.component';
import {PurchaseInvoicesComponent} from './purchase-invoices/purchase-invoices.component';
import {SalesInvoicesComponent} from './sales-invoices/sales-invoices.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CompanyItemComponent } from './companies/company-list/company-item/company-item.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { CompanyStartComponent } from './companies/company-start/company-start.component';
import { CompanyEditComponent } from './companies/company-edit/company-edit.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { PurchaseInvoiceDetailComponent } from './purchase-invoices/purchase-invoice-detail/purchase-invoice-detail.component';
import { PurchaseInvoiceEditComponent } from './purchase-invoices/purchase-invoice-edit/purchase-invoice-edit.component';
import { PurchaseInvoicesListComponent } from './purchase-invoices/purchase-invoices-list/purchase-invoices-list.component';
import { PurchaseInvoiceItemComponent } from './purchase-invoices/purchase-invoices-list/purchase-invoice-item/purchase-invoice-item.component';
import { PurchaseInvoiceStartComponent } from './purchase-invoices/purchase-invoice-start/purchase-invoice-start.component';
import { SalesInvoiceDetailComponent } from './sales-invoices/sales-invoice-detail/sales-invoice-detail.component';
import { SalesInvoiceEditComponent } from './sales-invoices/sales-invoice-edit/sales-invoice-edit.component';
import { SalesInvoiceStartComponent } from './sales-invoices/sales-invoice-start/sales-invoice-start.component';
import { SalesInvoicesListComponent } from './sales-invoices/sales-invoices-list/sales-invoices-list.component';
import { SalesInvoiceItemComponent } from './sales-invoices/sales-invoices-list/sales-invoice-item/sales-invoice-item.component';
import {HelperService} from './services/helper.service';
import {CompanyService} from './services/company.service';
import {PurchaseInvoiceService} from './services/purchase-invoice.service';
import {SalesInvoiceService} from './services/sales-invoice.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ErrorPageComponent,
    HomeComponent,
    CompaniesComponent,
    PurchaseInvoicesComponent,
    SalesInvoicesComponent,
    HeaderComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    CompanyStartComponent,
    CompanyEditComponent,
    CompanyListComponent,
    PurchaseInvoiceDetailComponent,
    PurchaseInvoiceEditComponent,
    PurchaseInvoicesListComponent,
    PurchaseInvoiceItemComponent,
    PurchaseInvoiceStartComponent,
    SalesInvoiceDetailComponent,
    SalesInvoiceEditComponent,
    SalesInvoiceStartComponent,
    SalesInvoicesListComponent,
    SalesInvoiceItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HelperService,
    CompanyService,
    PurchaseInvoiceService,
    SalesInvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

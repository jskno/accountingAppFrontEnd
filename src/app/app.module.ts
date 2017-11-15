import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {HelperService} from './services/helper.service';
import {CompanyService} from './services/company.service';
import {PurchaseInvoiceService} from './services/purchase-invoice.service';
import {SalesInvoiceService} from './services/sales-invoice.service';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {CompaniesModule} from './companies/companies.module';
import {PurchaseInvoicesModule} from './purchase-invoices/purchase-invoices.module';
import {SalesInvoicesModule} from './sales-invoices/sales-invoices.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    CompaniesModule,
    PurchaseInvoicesModule,
    SalesInvoicesModule,
    AuthModule,
    CoreModule
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

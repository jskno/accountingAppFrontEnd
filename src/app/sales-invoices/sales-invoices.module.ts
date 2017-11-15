import {NgModule} from '@angular/core';
import {SalesInvoicesComponent} from './sales-invoices.component';
import {SalesInvoicesListComponent} from './sales-invoices-list/sales-invoices-list.component';
import {SalesInvoiceItemComponent} from './sales-invoices-list/sales-invoice-item/sales-invoice-item.component';
import {SalesInvoiceStartComponent} from './sales-invoice-start/sales-invoice-start.component';
import {SalesInvoiceDetailComponent} from './sales-invoice-detail/sales-invoice-detail.component';
import {SalesInvoiceEditComponent} from './sales-invoice-edit/sales-invoice-edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {SalesInvoicesRoutingModule} from './sales-invoices-routing.module';

@NgModule({
  declarations: [
    SalesInvoicesComponent,
    SalesInvoicesListComponent,
    SalesInvoiceItemComponent,
    SalesInvoiceStartComponent,
    SalesInvoiceDetailComponent,
    SalesInvoiceEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SalesInvoicesRoutingModule
  ]
})
export class SalesInvoicesModule {}

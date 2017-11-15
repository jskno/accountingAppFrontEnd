import {NgModule} from '@angular/core';
import {PurchaseInvoicesComponent} from './purchase-invoices.component';
import {PurchaseInvoicesListComponent} from './purchase-invoices-list/purchase-invoices-list.component';
import {PurchaseInvoiceItemComponent} from './purchase-invoices-list/purchase-invoice-item/purchase-invoice-item.component';
import {PurchaseInvoiceStartComponent} from './purchase-invoice-start/purchase-invoice-start.component';
import {PurchaseInvoiceDetailComponent} from './purchase-invoice-detail/purchase-invoice-detail.component';
import {PurchaseInvoiceEditComponent} from './purchase-invoice-edit/purchase-invoice-edit.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PurchaseInvoicesRoutingModule} from './purchase-invoices-routing.module';

@NgModule({
  declarations: [
    PurchaseInvoicesComponent,
    PurchaseInvoicesListComponent,
    PurchaseInvoiceItemComponent,
    PurchaseInvoiceStartComponent,
    PurchaseInvoiceDetailComponent,
    PurchaseInvoiceEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PurchaseInvoicesRoutingModule
  ]
})
export class PurchaseInvoicesModule {}

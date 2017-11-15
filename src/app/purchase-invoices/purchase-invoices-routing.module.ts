import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchaseInvoicesComponent} from './purchase-invoices.component';
import {PurchaseInvoiceStartComponent} from './purchase-invoice-start/purchase-invoice-start.component';
import {PurchaseInvoiceEditComponent} from './purchase-invoice-edit/purchase-invoice-edit.component';
import {PurchaseInvoiceDetailComponent} from './purchase-invoice-detail/purchase-invoice-detail.component';

const purchaseInvoicesRouting: Routes = [
  {path: 'purchases', component: PurchaseInvoicesComponent, children: [
    {path: '', component: PurchaseInvoiceStartComponent},
    {path: 'new', component: PurchaseInvoiceEditComponent},
    {path: ':id', component: PurchaseInvoiceDetailComponent},
    {path: ':id/edit', component: PurchaseInvoiceEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(purchaseInvoicesRouting)],
  exports: [RouterModule]
})
export class PurchaseInvoicesRoutingModule {}

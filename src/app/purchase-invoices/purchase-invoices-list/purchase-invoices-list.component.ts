import { Component, OnInit } from '@angular/core';
import {PurchaseInvoiceService} from '../../services/purchase-invoice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PurchaseInvoice} from '../../model/purchase-invoice.model';
import {Purchase} from "../../model/purchase.model";

@Component({
  selector: 'app-purchase-invoices-list',
  templateUrl: './purchase-invoices-list.component.html',
  styleUrls: ['./purchase-invoices-list.component.css']
})
export class PurchaseInvoicesListComponent implements OnInit {
  purchaseInvoices: Purchase[];

  constructor(private purchaseInvoiceService: PurchaseInvoiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getPurchaseInvoices();
  }

  private getPurchaseInvoices(): void {
    this.purchaseInvoiceService.getPurchaseInvoices().then(
      // invoices => this.purchaseInvoices = invoices
    );
  }

  private fetchPurchases() {
    this.purchaseInvoiceService.fetchPurchases()
      .subscribe(
        (purchases: Purchase[]) => this.purchaseInvoices = purchases
      );
  }

  onNewPurchaseInvoice() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }
}

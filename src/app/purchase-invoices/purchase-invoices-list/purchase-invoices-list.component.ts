import {Component, OnDestroy, OnInit} from '@angular/core';
import {PurchaseInvoiceService} from '../../services/purchase-invoice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PurchaseInvoice} from '../model/purchase-invoice.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-purchase-invoices-list',
  templateUrl: './purchase-invoices-list.component.html',
  styleUrls: ['./purchase-invoices-list.component.css']
})
export class PurchaseInvoicesListComponent implements OnInit, OnDestroy {
  purchaseInvoicesChangedSubscription = new Subscription();
  purchaseInvoices: PurchaseInvoice[];

  constructor(private purchaseInvoiceService: PurchaseInvoiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.fetchPurchases();
    this.purchaseInvoicesChangedSubscription = this.purchaseInvoiceService.purchaseInvoicesChanged
      .subscribe(
        () => {
          this.fetchPurchases();
        }
      )
  }

  // private getPurchaseInvoices(): void {
  //   this.purchaseInvoiceService.getPurchaseInvoices().then(
  //     invoices => this.purchaseInvoices = invoices
  //   );
  // }

  private fetchPurchases(): void {
    this.purchaseInvoiceService.fetchPurchases()
      .subscribe(
        (purchaseInvoices: PurchaseInvoice[]) => this.purchaseInvoices = purchaseInvoices
      );
  }

  ngOnDestroy() {
    this.purchaseInvoicesChangedSubscription.unsubscribe();
  }

  onNewPurchaseInvoice() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }
}

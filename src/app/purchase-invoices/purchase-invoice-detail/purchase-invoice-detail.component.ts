import { Component, OnInit } from '@angular/core';
import {PurchaseInvoice} from '../../model/purchase-invoice.model';
import {PurchaseInvoiceService} from '../../services/purchase-invoice.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Purchase} from '../../model/purchase.model';

@Component({
  selector: 'app-purchase-invoice-detail',
  templateUrl: './purchase-invoice-detail.component.html',
  styleUrls: ['./purchase-invoice-detail.component.css']
})
export class PurchaseInvoiceDetailComponent implements OnInit {
  purchase: Purchase;
  id: number;

  constructor(private purchaseInvoiceService: PurchaseInvoiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.purchaseInvoiceService.fetchPurchaseById(this.id)
            .subscribe(
              (purchase: Purchase) => this.purchase = purchase
            );
        }
      )
  }

  onEditPurchaseInvoice() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onEditPurchaseGrouping() {

  }
}

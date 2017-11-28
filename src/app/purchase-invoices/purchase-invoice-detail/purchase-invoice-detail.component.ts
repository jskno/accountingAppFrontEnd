import { Component, OnInit } from '@angular/core';
import {PurchaseInvoice} from '../model/purchase-invoice.model';
import {PurchaseInvoiceService} from '../../services/purchase-invoice.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-purchase-invoice-detail',
  templateUrl: './purchase-invoice-detail.component.html',
  styleUrls: ['./purchase-invoice-detail.component.css']
})
export class PurchaseInvoiceDetailComponent implements OnInit {
  purchaseInvoice: PurchaseInvoice = this.purchaseInvoiceService.getEmptyPurchaseInvoice();
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
              (purchaseInvoice: PurchaseInvoice) => this.purchaseInvoice = purchaseInvoice
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

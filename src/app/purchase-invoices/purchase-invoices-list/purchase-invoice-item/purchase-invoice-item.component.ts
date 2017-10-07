import {Component, Input, OnInit} from '@angular/core';
import {PurchaseInvoice} from '../../../model/purchase-invoice.model';

@Component({
  selector: 'app-purchase-invoice-item',
  templateUrl: './purchase-invoice-item.component.html',
  styleUrls: ['./purchase-invoice-item.component.css']
})
export class PurchaseInvoiceItemComponent implements OnInit {
  @Input() purchaseInvoice: PurchaseInvoice;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {SalesInvoice} from '../../../model/sales-invoice.model';

@Component({
  selector: 'app-sales-invoice-item',
  templateUrl: './sales-invoice-item.component.html',
  styleUrls: ['./sales-invoice-item.component.css']
})
export class SalesInvoiceItemComponent implements OnInit {
  @Input() salesInvoice: SalesInvoice;

  constructor() { }

  ngOnInit() {
  }

}

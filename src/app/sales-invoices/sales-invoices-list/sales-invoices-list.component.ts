import { Component, OnInit } from '@angular/core';
import {SalesInvoice} from '../model/sales-invoice.model';
import {SalesInvoiceService} from '../../services/sales-invoice.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sales-invoices-list',
  templateUrl: './sales-invoices-list.component.html',
  styleUrls: ['./sales-invoices-list.component.css']
})
export class SalesInvoicesListComponent implements OnInit {
  salesInvoices: SalesInvoice[];

  constructor(private salesInvoiceService: SalesInvoiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.fetchSalesInvoices();
  }

  private getSalesInvoices(): void {
    this.salesInvoiceService.getSalesInvoices().then(
      invoices => this.salesInvoices = invoices
    );
  }

  private fetchSalesInvoices() {
    this.salesInvoiceService.fetchSalesInvoices()
      .subscribe(
        (invoices: SalesInvoice[]) => this.salesInvoices = invoices
      );
  }

  onNewSalesInvoice() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

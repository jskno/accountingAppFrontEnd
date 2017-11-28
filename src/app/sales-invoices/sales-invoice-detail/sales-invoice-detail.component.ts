import { Component, OnInit } from '@angular/core';
import {SalesInvoice} from '../model/sales-invoice.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SalesInvoiceService} from '../../services/sales-invoice.service';

@Component({
  selector: 'app-sales-invoice-detail',
  templateUrl: './sales-invoice-detail.component.html',
  styleUrls: ['./sales-invoice-detail.component.css']
})
export class SalesInvoiceDetailComponent implements OnInit {
  salesInvoice: SalesInvoice = this.salesInvoiceService.getEmptySalesInvoice();
  id: number;

  constructor(private salesInvoiceService: SalesInvoiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.salesInvoiceService.fetchSalesInvoiceById(this.id)
            .subscribe(
              (salesInvoice: SalesInvoice) => this.salesInvoice = salesInvoice
            );
        }
      )
  }

  onEditSalesInvoice() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}

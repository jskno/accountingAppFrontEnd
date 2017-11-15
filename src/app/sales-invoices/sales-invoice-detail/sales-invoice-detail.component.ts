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
  salesInvoice: SalesInvoice;
  id: number;

  constructor(private salesInvoiceService: SalesInvoiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.salesInvoice = this.salesInvoiceService.getSalesInvoice(this.id);
        }
      )
  }

  onEditSalesInvoice() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}

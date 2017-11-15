import { Component, OnInit } from '@angular/core';
import {Company} from '../model/company.model';
import {CompanyService} from '../../services/company.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company = this.companyService.getEmptyCompany();
  id: number;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.companyService.fetchCompanyById(this.id)
            .subscribe(
              (company: Company) => this.company = company
            );
        }
      )
  }

  onEditCompany() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  createInvoice() {

  }

}

import {Component, OnInit} from '@angular/core';
import {Company} from '../model/company.model';
import {CompanyService} from '../services/company.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [CompanyService]
})
export class CompaniesComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.companies = this.companyService.getCompanies();
  }

  onNewCompany() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

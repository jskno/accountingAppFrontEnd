import {Component, OnDestroy, OnInit} from '@angular/core';
import {Company} from '../../model/company.model';
import {CompanyService} from '../../services/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit, OnDestroy {
  companiesChangedSubscription = new Subscription();
  companies: Company[];

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.getCompanies();
    this.companiesChangedSubscription = this.companyService.companiesChanged
      .subscribe(
        () => {
          this.getCompanies();
        }
      )
  }

  // private getCompanies(): void {
  //   this.companyService.getCompanies().then(
  //     companies => this.companies = companies
  //   );
  // }

  private getCompanies(): void {
    this.companyService.fetchCompanies()
      .subscribe(
        (companies: Company[]) => this.companies = companies
    );
  }

  ngOnDestroy() {
    this.companiesChangedSubscription.unsubscribe();
  }

  onNewCompany() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

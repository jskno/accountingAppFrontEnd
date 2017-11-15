import {NgModule} from '@angular/core';
import {CompaniesComponent} from './companies.component';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyItemComponent} from './company-list/company-item/company-item.component';
import {CompanyStartComponent} from './company-start/company-start.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {CompanyEditComponent} from './company-edit/company-edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CompaniesRoutingModule} from './companies-routing.module';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyStartComponent,
    CompanyDetailComponent,
    CompanyEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule {}

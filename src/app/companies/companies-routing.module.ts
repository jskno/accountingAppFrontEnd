import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from './companies.component';
import {CompanyStartComponent} from './company-start/company-start.component';
import {CompanyEditComponent} from './company-edit/company-edit.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';

const companiesRoutes: Routes = [
  {path: 'companies', component: CompaniesComponent, children: [
    {path: '', component: CompanyStartComponent},
    {path: 'new', component: CompanyEditComponent},
    {path: ':id', component: CompanyDetailComponent},
    {path: ':id/edit', component: CompanyEditComponent}
  ]},
]
@NgModule({
  imports: [RouterModule.forChild(companiesRoutes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}

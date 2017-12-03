import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Company} from '../model/company.model';
import {CompanyService} from '../../services/company.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  id: number;
  editMode = false;
  companyForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.editMode = params['id'] != null;
          this.id = +params['id'];
          this.initForm();
        }
      );
  }

  private initForm() {
    let id = null;
    let companyName = '';
    let cif = '';
    let address = ''
    let telephone = '';
    let email = '';
    let selectedCompany: Company;

    this.companyForm = new FormGroup({
      'id': new FormControl(id),
      'companyName': new FormControl(companyName, [Validators.required]),
      'cif': new FormControl(cif, [Validators.required]),
      'address': new FormControl(address),
      'telephone': new FormControl(telephone),
      'email': new FormControl(email, [Validators.email])
    });

    if (this.editMode) {
      this.companyService.fetchCompanyById(this.id)
        .subscribe(
          (company: Company) => {
            selectedCompany = company;
            id = selectedCompany.id;
            companyName = selectedCompany.name;
            cif = selectedCompany.cif;
            address = selectedCompany.address;
            telephone = selectedCompany.telephone;
            email = selectedCompany.email;
            this.companyForm = new FormGroup({
              'id': new FormControl(id),
              'companyName': new FormControl(companyName, [Validators.required]),
              'cif': new FormControl(cif, [Validators.required]),
              'address': new FormControl(address),
              'telephone': new FormControl(telephone),
              'email': new FormControl(email, [Validators.email])
            })
          }
        );
    }
  }

  onSubmit() {
    console.log(this.companyForm);
    const company = new Company(
      this.companyForm.value.id,
      this.companyForm.value.companyName,
      this.companyForm.value.cif,
      this.companyForm.value.address,
      this.companyForm.value.telephone,
      this.companyForm.value.email
    );
    this.companyService.addBE(company)
      .subscribe(
        (transformedData: any) => {
          // Use your response data here
          console.log(transformedData);
          this.companyService.companiesChanged.next();
        }
      );
    this.companyForm.reset();
  }

}

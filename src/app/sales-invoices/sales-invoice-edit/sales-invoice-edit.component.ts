import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {SalesInvoiceService} from '../../services/sales-invoice.service';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../companies/model/company.model';
import {SalesInvoice} from '../model/sales-invoice.model';

@Component({
  selector: 'app-sales-invoice-edit',
  templateUrl: './sales-invoice-edit.component.html',
  styleUrls: ['./sales-invoice-edit.component.css']
})
export class SalesInvoiceEditComponent implements OnInit {
  id: number;
  editMode = false;
  companies: Company[];
  salesInvoiceForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private salesInvoiceService: SalesInvoiceService,
              private companyService: CompanyService) { }

  ngOnInit() {
    this.fetchCompanies();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
          console.log(this.editMode);
        }
      );
  }

  private getCompanies(): void {
    this.companyService.getCompanies().then(
      companies => this.companies = companies
    );
  };

  private fetchCompanies() {
    this.companyService.fetchCompanies()
      .subscribe(
        (companies: Company[]) => this.companies = companies
      );
  }

  private initForm() {
    let id = null;
    let invoiceNumber = '';
    let date = null;
    let company = null;
    let amount = null;
    let vatPercentage = 21;
    let vatAmount = null;
    let totalInvoice = null;

    this.salesInvoiceForm = new FormGroup({
      'salesInvoiceData': new FormGroup({
        'id': new FormControl(id),
        'invoiceNumber': new FormControl(invoiceNumber, [Validators.required]),
        'date': new FormControl(date, [Validators.required]),
        'company': new FormControl(company, [Validators.required]),
        'amount': new FormControl(amount, [Validators.required]),
        'vatPercentage': new FormControl(vatPercentage, [Validators.required]),
        'vatAmount': new FormControl(vatAmount, [Validators.required]),
        'totalInvoice': new FormControl(totalInvoice, [Validators.required])
      })
    });

    if (this.editMode) {
      this.salesInvoiceService.fetchSalesInvoiceById(this.id)
        .subscribe(
          (salesInvoice: SalesInvoice) => {
            id = salesInvoice.id;
            invoiceNumber = salesInvoice.invoiceNumber;
            date = salesInvoice.date;
            company = salesInvoice.company;
            amount = salesInvoice.amount;
            vatPercentage = salesInvoice.vatPercentage;
            vatAmount = salesInvoice.vatAmount;
            totalInvoice = salesInvoice.totalInvoice;
            this.salesInvoiceForm = new FormGroup({
              'salesInvoiceData': new FormGroup({
                'id': new FormControl(id),
                'invoiceNumber': new FormControl(invoiceNumber, [Validators.required]),
                'date': new FormControl(date, [Validators.required]),
                'company': new FormControl(company, [Validators.required]),
                'amount': new FormControl(amount, [Validators.required]),
                'vatPercentage': new FormControl(vatPercentage, Validators.required),
                'vatAmount': new FormControl(vatAmount, [Validators.required]),
                'totalInvoice': new FormControl(totalInvoice, [Validators.required])
              })
            });
          }
        );
    }
  }

  onSubmit() {
    console.log(this.salesInvoiceForm);
    const salesInvoice = new SalesInvoice(
      this.salesInvoiceForm.controls.salesInvoiceData.value.id,
      this.salesInvoiceForm.controls.salesInvoiceData.value.invoiceNumber,
      this.salesInvoiceForm.controls.salesInvoiceData.value.date,
      this.salesInvoiceForm.controls.salesInvoiceData.value.company,
      this.salesInvoiceForm.controls.salesInvoiceData.value.amount,
      this.salesInvoiceForm.controls.salesInvoiceData.value.vatPercentage,
      this.salesInvoiceForm.controls.salesInvoiceData.value.vatAmount,
      this.salesInvoiceForm.controls.salesInvoiceData.value.totalInvoice
    );
    this.salesInvoiceService.save(salesInvoice)
      .subscribe(
        (transformedData: any) => {
          // Use your response data here
          console.log(transformedData);
          this.salesInvoiceService.salesInvoicesChanged.next();
        }
      );
    this.salesInvoiceForm.reset();
  }

}

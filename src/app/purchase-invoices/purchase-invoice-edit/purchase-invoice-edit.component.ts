import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HelperService} from '../../services/helper.service';
import {Company} from '../../companies/model/company.model';
import {PurchaseInvoiceService} from '../../services/purchase-invoice.service';
import {CompanyService} from '../../services/company.service';
import {ActivatedRoute, Params} from '@angular/router';
import {PurchaseInvoice} from '../model/purchase-invoice.model';
import {PurchaseInvClassifData} from '../model/purchase-inv-classif-data.model';

@Component({
  selector: 'app-purchase-invoice-edit',
  templateUrl: './purchase-invoice-edit.component.html',
  styleUrls: ['./purchase-invoice-edit.component.css']
})
export class PurchaseInvoiceEditComponent implements OnInit {
  id: number;
  editMode = false;
  companies: Company[];
  purchaseInvoiceForm: FormGroup;
  expenseTypes;
  expensePeriods;
  defaultExpenseType;
  defaultExpensePeriod;
  vatApplicable: boolean;

  constructor(private helperService: HelperService,
              private purchaseInvoiceService: PurchaseInvoiceService,
              private companyService: CompanyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.defaultExpenseType = this.helperService.getDefaultExpenseType();
    this.defaultExpensePeriod = this.helperService.getDefaultExpensePeriod();
    this.expenseTypes = this.helperService.getExpenseTypes();
    this.expensePeriods = this.helperService.getExpensePeriods();
    this.fetchCompanies();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
          console.log(this.editMode);
        }
      )
  }

  private getCompanies(): void {
    this.companyService.getCompanies().then(
      companies => this.companies = companies
    );
  }

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
    let company: Company = null;
    let amount = null;
    let vatPercentage = 21;
    let vatAmount = null;
    let totalInvoice = null;
    let expenseType = this.defaultExpenseType;
    let vatApplicable = true;
    let vatPercentageApplicable = 100;
    let expensePeriod = this.defaultExpensePeriod;
    let amortizationPolicy = '';
    let annualAmortPercentage = null

    this.purchaseInvoiceForm = new FormGroup({
      'purchaseInvoiceData': new FormGroup({
        'id': new FormControl(id),
        'invoiceNumber': new FormControl(invoiceNumber, [Validators.required]),
        'date': new FormControl(date, [Validators.required]),
        'company': new FormControl(company, [Validators.required]),
        'amount': new FormControl(amount, [Validators.required]),
        'vatPercentage': new FormControl(vatPercentage, Validators.required),
        'vatAmount': new FormControl(vatAmount, [Validators.required]),
        'totalInvoice': new FormControl(totalInvoice, [Validators.required])
      }),
      'purchaseInvoiceClassificationData': new FormGroup({
        'expenseType': new FormControl(expenseType),
        'vatApplicable': new FormControl(vatApplicable, [Validators.required]),
        'vatPercentageApplicable': new FormControl(vatPercentageApplicable, [Validators.required]),
        'expensePeriod': new FormControl(expensePeriod),
        'amortizationPolicy': new FormControl(amortizationPolicy),
        'annualAmortPercentage': new FormControl(annualAmortPercentage)
      })
    });

    if (this.editMode) {
      this.purchaseInvoiceService.fetchPurchaseById(this.id)
        .subscribe(
          (purchaseInvoice: PurchaseInvoice) => {
            id = purchaseInvoice.id;
            invoiceNumber = purchaseInvoice.invoiceNumber;
            date = purchaseInvoice.date;
            company = purchaseInvoice.company;
            amount = purchaseInvoice.amount;
            vatPercentage = purchaseInvoice.vatPercentage;
            vatAmount = purchaseInvoice.vatAmount;
            totalInvoice = purchaseInvoice.totalInvoice;
            expenseType = purchaseInvoice.purchaseInvClassifData.expenseType;
            vatApplicable = purchaseInvoice.purchaseInvClassifData.vatApplicable;
            vatPercentageApplicable = purchaseInvoice.purchaseInvClassifData.vatPercentageApplicable;
            expensePeriod = purchaseInvoice.purchaseInvClassifData.expensePeriod;
            amortizationPolicy = purchaseInvoice.purchaseInvClassifData.amortizationPolicy;
            annualAmortPercentage = purchaseInvoice.purchaseInvClassifData.annualAmortPercentage;
            this.purchaseInvoiceForm = new FormGroup({
              'purchaseInvoiceData': new FormGroup({
                'id': new FormControl(id),
                'invoiceNumber': new FormControl(invoiceNumber, [Validators.required]),
                'date': new FormControl(date, [Validators.required]),
                'company': new FormControl(company, [Validators.required]),
                'amount': new FormControl(amount, [Validators.required]),
                'vatPercentage': new FormControl(vatPercentage, Validators.required),
                'vatAmount': new FormControl(vatAmount, [Validators.required]),
                'totalInvoice': new FormControl(totalInvoice, [Validators.required])
              }),
              'purchaseInvoiceClassificationData': new FormGroup({
                'expenseType': new FormControl(expenseType),
                'vatApplicable': new FormControl(vatApplicable, [Validators.required]),
                'vatPercentageApplicable': new FormControl(vatPercentageApplicable, [Validators.required]),
                'expensePeriod': new FormControl(expensePeriod),
                'amortizationPolicy': new FormControl(amortizationPolicy),
                'annualAmortPercentage': new FormControl(annualAmortPercentage)
              })
            });
          }
        );
    }
  }

  onSubmit() {
    console.log(this.purchaseInvoiceForm);
    const purchaseInvoice = new PurchaseInvoice(
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.id,
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.invoiceNumber,
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.date,
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.company,
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.amount,
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.vatPercentage,
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.vatAmount,
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.totalInvoice
    );
    const purchaseInvClassifData = new PurchaseInvClassifData(
      this.purchaseInvoiceForm.controls.purchaseInvoiceData.value.id,
      this.purchaseInvoiceForm.controls.purchaseInvoiceClassificationData.value.expenseType,
      this.purchaseInvoiceForm.controls.purchaseInvoiceClassificationData.value.vatApplicable,
      this.purchaseInvoiceForm.controls.purchaseInvoiceClassificationData.value.vatPercentageApplicable,
      this.purchaseInvoiceForm.controls.purchaseInvoiceClassificationData.value.expensePeriod,
      this.purchaseInvoiceForm.controls.purchaseInvoiceClassificationData.value.amortizationPolicy,
      this.purchaseInvoiceForm.controls.purchaseInvoiceClassificationData.value.annualAmortPercentage,
    )
    purchaseInvoice.purchaseInvClassifData = purchaseInvClassifData;
    this.purchaseInvoiceService.save(purchaseInvoice)
      .subscribe(
        (transformedData: any) => {
          // Use your response data here
          console.log(transformedData);
        }
      );
    this.purchaseInvoiceForm.reset();
  }

}

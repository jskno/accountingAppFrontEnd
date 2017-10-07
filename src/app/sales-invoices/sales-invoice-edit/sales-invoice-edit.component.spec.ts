import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoiceEditComponent } from './sales-invoice-edit.component';

describe('SalesInvoiceEditComponent', () => {
  let component: SalesInvoiceEditComponent;
  let fixture: ComponentFixture<SalesInvoiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInvoiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

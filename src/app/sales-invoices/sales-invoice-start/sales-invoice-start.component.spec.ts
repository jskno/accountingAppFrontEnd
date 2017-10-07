import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoiceStartComponent } from './sales-invoice-start.component';

describe('SalesInvoiceStartComponent', () => {
  let component: SalesInvoiceStartComponent;
  let fixture: ComponentFixture<SalesInvoiceStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInvoiceStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoiceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStartComponent } from './company-start.component';

describe('CompanyStartComponent', () => {
  let component: CompanyStartComponent;
  let fixture: ComponentFixture<CompanyStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

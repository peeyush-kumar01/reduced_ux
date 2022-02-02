import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceinfoComponent } from './invoiceinfo.component';

describe('InvoiceinfoComponent', () => {
  let component: InvoiceinfoComponent;
  let fixture: ComponentFixture<InvoiceinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinformationComponent } from './productinformation.component';

describe('ProductinformationComponent', () => {
  let component: ProductinformationComponent;
  let fixture: ComponentFixture<ProductinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

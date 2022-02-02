import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderinformationComponent } from './orderinformation.component';

describe('OrderinformationComponent', () => {
  let component: OrderinformationComponent;
  let fixture: ComponentFixture<OrderinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

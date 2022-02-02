import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CominfoComponent } from './cominfo.component';

describe('CominfoComponent', () => {
  let component: CominfoComponent;
  let fixture: ComponentFixture<CominfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CominfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CominfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

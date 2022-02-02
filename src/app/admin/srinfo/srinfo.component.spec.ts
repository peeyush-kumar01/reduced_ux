import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrinfoComponent } from './srinfo.component';

describe('SrinfoComponent', () => {
  let component: SrinfoComponent;
  let fixture: ComponentFixture<SrinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

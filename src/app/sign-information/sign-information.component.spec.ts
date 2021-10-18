
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInformationComponent } from './sign-information.component';

describe('SignInformationComponent', () => {
  let component: SignInformationComponent;
  let fixture: ComponentFixture<SignInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
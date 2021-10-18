
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInformationComponent } from './document-information.component';

describe('DocumentInformationComponent', () => {
  let component: DocumentInformationComponent;
  let fixture: ComponentFixture<DocumentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
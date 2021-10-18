
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sectionDetail: { [index: string]: string } = {
    header: '',
    detail: '',
  };

  setContactDetail(): void {
    this.sectionDetail.header = 'Contact Detail';
    this.sectionDetail.detail = '<p>This is my contact please mail</p>';
  }

  setAboutDetail(): void {
    this.sectionDetail.header = 'About US';
    this.sectionDetail.detail = '<p>This is my contact please mail</p>';
  }

  setFeedbackDetail(): void {
    this.sectionDetail.header = 'Write to us';
    this.sectionDetail.detail = '<p>This is my contact please mail</p>';
  }

  setCopywriteDetail(): void {
    this.sectionDetail.header = 'Copywrite Information';
    this.sectionDetail.detail = '<p>This is my contact please mail</p>';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-information',
  templateUrl: './document-information.component.html',
  styleUrls: ['./document-information.component.css'],
})
export class DocumentInformationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  docs: { [index: string]: string }[] = [
    {
      docName: 'Will be coming soon',
      docType: 'PDF',
      docId: '0',
    }
  ];
}

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
      docName: 'ABC',
      docType: 'PDF',
      docId: '111',
    },
    {
      docName: 'dsds',
      docType: '',
      docId: '',
    },
    {
      docName: 'sdsfffdfffdsfdsfdfsfsdfdsf',
      docType: '',
      docId: '',
    },
    {
      docName: 'sds',
      docType: '',
      docId: '',
    },
    {
      docName: 'sds',
      docType: '',
      docId: '',
    },
    {
      docName: '',
      docType: '',
      docId: '',
    },
    {
      docName: '',
      docType: '',
      docId: '',
    },
    {
      docName: '',
      docType: '',
      docId: '',
    },
    {
      docName: '',
      docType: '',
      docId: '',
    },
  ];
}
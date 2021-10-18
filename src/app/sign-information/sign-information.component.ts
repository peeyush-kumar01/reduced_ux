
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-information',
  templateUrl: './sign-information.component.html',
  styleUrls: ['./sign-information.component.css'],
})
export class SignInformationComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {}

  ar: { [index: string]: string }[] = [
    {
      date: '12-Mar-2021',
      user: 'us1',
      detail: 'ok fine',
    },
    {
      date: '12-Mar-2021',
      user: 'us1',
      detail: 'ok fine',
    },
    {
      date: '12-Mar-2021',
      user: 'us1',
      detail: 'ok fine',
    },
    {
      date: '12-Mar-2021',
      user: 'us1',
      detail: 'ok fine',
    },
  ];
}
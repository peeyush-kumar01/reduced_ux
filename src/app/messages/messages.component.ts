
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }
  static messages: string = '';
  ngOnInit(): void {
  }

  static setErrormessage(vcheck: any, msg: string) {
    if (vcheck === undefined || vcheck === null) {
      MessagesComponent.messages = msg;
    }else{
      MessagesComponent.messages ='';
    }
  }

  get errorMsg(){
    return MessagesComponent.messages;
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LoginBean } from '../login-bean';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userDetail: LoginBean = new LoginBean('Peeyush', 'Kumar');

  constructor(private appService: AppService) {
    appService.getLoginDetail().subscribe((login) => {
       this.userDetail.userid;
       this.userDetail.password;
    });
  }

  ngOnInit(): void {}
}
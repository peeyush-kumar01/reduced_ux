
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { LoginBean } from '../login-bean';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: String
  constructor(private appmodule: AppModule, private router: Router) {
    this.error = ''
  }

  ngOnInit(): void { }

  loginService() {
    let LB = new LoginBean('peeyush', 'kumar2312');
    console.log(LB.validateUserId())
    if (
      LB.validateLogin() &&
      LB.validateUserId() &&
      LB.validatePassLen &&
      LB.validateUserPassEqulity()
    ) {
      this.appmodule.runGetCall('LOGIN', { 'userid': LB.userid, 'password': LB.password }).subscribe(
        data => {
          if (data['successMsg']) {
            sessionStorage.setItem('currentUser', data['successMsg']);
            AppModule.IS_LOGGED_IN = true;
            this.router.navigateByUrl('/dashboard/home');
          }
        },
        error => {
          this.error = error
          console.log(error);
        },
        () => {
          console.log('Login done');
        }
      )
    } else {
      console.log(this.error);
      this.error = "Please enter correct values. Username can not contain other than alphabet, numbers and underscore. Password must be minimum of 8 character in length"
    }
  }
}
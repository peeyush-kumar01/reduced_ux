import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { LoginBean } from 'src/app/login-bean';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  error: string
  constructor(private appmodule: AppModule, private router: Router) {
    this.error = ''
  }

  ngOnInit(): void {
  }

  adminloginService() {
    let LB = new LoginBean('peeyush', 'kumar1234');
    if (LB.validateLogin() &&
      LB.validatePassLen() &&
      LB.validateUserId() &&
      LB.validateUserPassEqulity()) {
      this.appmodule.runGetCall('LOGIN', { 'userid': LB.userid, 'password': LB.password }).subscribe(
        data => {
          if (data['successMsg']) {
            sessionStorage.setItem('adminUser', data['successMsg']);
            AppModule.IS_LOGGED_IN = true;
            this.router.navigateByUrl('/administratorurlhidden/admindashboard/adminhome');
          }
        },
        error => {
          this.error = error;
          console.log(error);
        },
        () => {
          console.log('Login done');
        }
      )
    } else {
      this.error = "Please enter correct values. Username can not contain other than alphabet, numbers and underscore and should not same as password. Password must be minimum of 8 character in length"
    }
  }
}
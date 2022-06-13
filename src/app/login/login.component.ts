
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { LoginBean } from '../login-bean';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: String

  constructor(private formbuilder: FormBuilder, private appmodule: AppModule, private router: Router) {
    this.error = ''
  }

  loginForm = this.formbuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  ngOnInit(): void { }

  loginService() {
    let LB = new LoginBean(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value);

    if (
      LB.validateLogin() &&
      LB.validateUserId() &&
      LB.validatePassLen() &&
      LB.validateUserPassEqulity()
    ) {
      this.appmodule.runGetCall('LOGIN', { 'userid': LB.userid, 'password': LB.password }).subscribe(
        data => {
          if (data['successMsg']) {
            sessionStorage.setItem('currentUser', JSON.stringify(data['successMsg']));
            AppModule.IS_LOGGED_IN = true;
            AppModule.USR = data['successMsg']
            if (data['errorMsg']) alert(data['errorMsg']);
            this.router.navigateByUrl('/dashboard/home');
          }
        },
        error => {
          this.error = error
          console.log(error);
          alert(error)
        },
        () => {
          console.log('Login done');
        }
      )
    } else {
      this.error = "Please enter correct values. Username can not contain other than alphabet, numbers, '@', '_' and dot. Password must be minimum of 8 character in length"
      console.log(this.error);
      alert(this.error)
    }
  }
}
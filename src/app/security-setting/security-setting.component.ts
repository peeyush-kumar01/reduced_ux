
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserType } from '../Objects';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-security-setting',
  templateUrl: './security-setting.component.html',
  styleUrls: ['./security-setting.component.css']
})
export class SecuritySettingComponent implements OnInit {

  oldPassword?: string;
  newPassword?: string;
  reNewPassword?: string;

  user: UserType = {
    id: '',
    userid: '',
    password: '',
    type:''
  }

  constructor(private router: Router, private appmodule: AppModule) {

  }

  ngOnInit(): void {
    this.user.id = JSON.parse(sessionStorage.getItem('currentUser')!).id
    this.user.userid = JSON.parse(sessionStorage.getItem('currentUser')!).userid
    this.user.type = JSON.parse(sessionStorage.getItem('currentUser')!).type
  }

  goBack() {
    let path = '/'
    if (sessionStorage.getItem('currentUser')) {
      path = '/dashboard/profile'
    }
    else if (sessionStorage.getItem('adminUser')) {
      path = '/administratorurlhidden/admindashboard/adminprofile'
    }
    this.router.navigateByUrl(path);
  }

  updatePassword(event: Event): void {
    event.preventDefault();
    //  console.log(this.newPassword)
    this.user.password = this.newPassword;

    let userO = new User(this.user);
   // console.log(userO.validateOldAndNewPassword(this.oldPassword!, this.newPassword!))

    if (!userO.validateOldAndNewPassword(this.oldPassword!, this.newPassword!)
      || !userO.validateUserEntry()
      || !userO.validateRePassword(this.newPassword!, this.reNewPassword!)
    ) {
      alert('Please enter correct password')
    }

    this.appmodule.runGetCall('USER', { data: [{User:this.user}], Password: this.oldPassword }).subscribe(
      data => { console.log(data['successMsg']) },
      error => { console.log(error) },
      () => { console.log('Done') }
    )
  }
}
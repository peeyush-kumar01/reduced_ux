
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-setting',
  templateUrl: './security-setting.component.html',
  styleUrls: ['./security-setting.component.css']
})
export class SecuritySettingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
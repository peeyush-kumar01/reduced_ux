
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-sign-information',
  templateUrl: './sign-information.component.html',
  styleUrls: ['./sign-information.component.css'],
})
export class SignInformationComponent implements OnInit {
  constructor(private appmodule: AppModule) {

  }

  ngOnInit(): void {

    this.appmodule.runGetCall('GET_LOGINLIST', {}).subscribe(
      (data) => {
        data['successMsg'].forEach((element: any) => {
          this.ar.push(
            {

              date: element.updated,
              user: element.accntid,
              detail: element.message,
            }
          )
        });
        console.log(this.ar)
      },
      (error) => { console.log(error) },
      () => { console.log('Done') }
    )
  }

  ar: any[]=[]
}
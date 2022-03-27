import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-cominfo',
  templateUrl: './cominfo.component.html',
  styleUrls: ['./cominfo.component.css']
})
export class CominfoComponent implements OnInit {

  textArea: any[] = [];
  isCollapsed: boolean[] = [];
  constructor(private appmodule: AppModule) { }

  ngOnInit(): void {
    this.appmodule.runGetCall('GET_ADMIN_COM', {}).subscribe(
      (data) => {
        data['successMsg'].forEach((element: any) => {
          this.textArea.push({
            updated: new Date(element.updated).toLocaleString(),
            accntname: element.accntname,
            message: element.message
          })
        });
      },
      (error) => { console.log(error) },
      () => { console.log('Done') }
    )
  }
}

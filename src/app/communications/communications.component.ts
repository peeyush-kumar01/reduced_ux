
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css'],
})
export class CommunicationsComponent implements OnInit {
  textArea: any[] = [];
  isCollapsed: boolean[] = [];
  constructor(private appmodule: AppModule) { }

  ngOnInit(): void {
    this.appmodule.runGetCall('GET_COMM', {}).subscribe(
      (data) => {
        data['successMsg'].forEach((element: any) => {
          this.textArea.push({
            updated: new Date(element.updated).toLocaleString(),
            message: element.message
          })
        });
      },
      (error) => { console.log(error) },
      () => { console.log('Done') }
    )
  }
}
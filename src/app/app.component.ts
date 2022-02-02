
import { Component, HostListener } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private appmodule: AppModule) { }
  changeOfRoutes($event: Event) {
  }
  ngOnInit() {
    this.appmodule.runGetCall('PTNR', '').subscribe(
      data => { AppModule.LST_PTNR = data['successMsg'] },
      error => { console.log(error) },
      () => { console.log('Partner fetch completed') }
    );
    this.appmodule.runGetCall('CATG', '').subscribe(
      data => { AppModule.LST_CATG = data['successMsg'] },
      error => { console.log(error) },
      () => { console.log('Category fetch completed') }
    );
    this.appmodule.runGetCall('CNTRY', '').subscribe(
      data => { AppModule.LST_CNTRY = data['successMsg'] },
      error => { console.log(error) },
      () => { console.log('Country fetch completed') }
    );
    this.appmodule.runGetCall('CRNCY', '').subscribe(
      data => { AppModule.LST_CRNCY = data['successMsg'] },
      error => { console.log(error) },
      () => { console.log('Currency fetch completed') }
    );
  }
}
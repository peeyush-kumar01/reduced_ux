import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private appmodule: AppModule) { }

  ngOnInit(): void {
    this.appmodule.runGetCall('GET_ADMIN_GST', {}).subscribe(
      (data) => { this.listGST = data['successMsg'] }
    )
  }

  listLOV: any[] = [];
  listGST: any[] = [];
  listXchange: any[] = [];
  listKey: any[] = [];
  listCompany: any[] = [];

  InititeCSVBackup() {

  }

  findandupdateCompany() {

  }

  findandupdateKey() {

  }

  findandupdateXchange() {

  }

  findandupdateLOV() {

  }

  findandupdateGST() {

  }

  uploadBGST() {

  }

  uploadBProduct() {

  }

  uploadBInvoice() {

  }

}

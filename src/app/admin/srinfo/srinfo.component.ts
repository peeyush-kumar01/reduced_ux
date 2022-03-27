import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { ServicerequestType } from 'src/app/Objects';
import { SR } from 'src/app/sr';

@Component({
  selector: 'app-srinfo',
  templateUrl: './srinfo.component.html',
  styleUrls: ['./srinfo.component.css']
})
export class SrinfoComponent implements OnInit {
  constructor(private appmodule: AppModule) { }

  ngOnInit(): void {
    this.getSR();
    this.appmodule.runGetCall('GET_ACCOUNT', {listaccount:'ALL'}).subscribe(
      (data) => {
        if (data['successMsg']) {
          this.aclist = data['successMsg'].reduce((p: any, c: any) => {
            p.push({
              customerid: c['customerid'],
              fullname: c['fullname']
            })
            return p
           
          }, [])
          console.log(this.aclist)
        } else {
          alert('There is some issue.Please try again.')
        }
      },
      (error) => {
        console.log(error)
        alert(error)
      },
      () => { console.log('Done') }
    )
  }
  context: any = {}
  interactionKeys: any[] = []

  SR: ServicerequestType[] = [];
  aclist: any[] = []
  isSrClosed: boolean = false;
  isHovered: boolean = false;
  hoverStyle: {} = {};
  id: string | undefined = undefined;

  getId($event: Event) {
    this.id = (<HTMLElement>$event.target).attributes.getNamedItem('id')?.value;
  }

  setContext(val: any): void {
    this.context = val;
    this.interactionKeys = this.processI(val['interaction'])
  }

  processI(i: Map<string, string>): string[] {
    return Object.keys(i)
  }

  closeSR(val: any): void {
    if (val.status == 'CLOSED') {
      alert('SR is already closed.')
      return;
    }
    val.interaction = "SR has been closed by the user."
    val.status = 'CLOSED'
    this.appmodule.runGetCall('SR', { data: [{ Servicerequest: val }] }).subscribe(
      (data) => {
        if (data['successMsg']) {
          alert('SR closed succesfully')
        } else {
          alert('There is some issue.Please try again.')
        }
      },
      (error) => {
        console.log(error)
        alert(error)
      },
      () => { console.log('Done') }
    )
    this.getSR()
  }

  getSR() {
    this.appmodule.runGetCall('GET_ADMIN_SR', {}).subscribe(
      (data) => {
        this.SR = data['successMsg']
      },
      (error) => {
        console.log(error)
        alert(error)
      },
      () => { console.log('Done') }
    )
  }
  createSR(): void {
    let sr: ServicerequestType = {
      id: '',
      status: 'OPEN',
      srno: '',
      accntid: AppModule.USR.accntid,
      type: (<HTMLSelectElement>document.getElementById('srtype')).value,
      interaction: (<HTMLTextAreaElement>document.getElementById('srtext')).value,
      updatedby: null,
      createdby: null,
      created: null,
      updated: null
    }

    let srO = new SR(sr);
    srO.validateSR()

    this.appmodule.runGetCall('SR', { data: [{ Servicerequest: sr }] }).subscribe(
      (data) => {
        if (data['successMsg']) {
          alert('SR created succesfully')
        } else {
          alert('There is some issue.Please try again.')
        }
      },
      (error) => {
        console.log(error)
        alert(error)
      },
      () => { console.log('Done') }
    )
    this.getSR()
  }

  updateSR() {
    if (this.context.status == 'CLOSED') {
      alert('SR is already closed.')
      return;
    }
    this.context.interaction = (<HTMLTextAreaElement>document.getElementById('srtextupdate')).value
    let srO = new SR(this.context);
    srO.validateSR()
    console.log(this.context)
    this.appmodule.runGetCall('SR', { data: [{ Servicerequest: this.context }] }).subscribe(
      (data) => {
        if (data['successMsg']) {
          alert('SR updated succesfully')
        } else {
          alert('There is some issue.Please try again.')
        }
      },
      (error) => {
        console.log(error)
        alert(error)
      },
      () => { console.log('Done') }
    )
    this.getSR()
  }
  getStyle() {
    this.hoverStyle =
      this.isHovered && !this.isSrClosed
        ? {
          cursor: 'pointer',
          'font-weight': 'bold',
          transition: 'transform 125ms',
          transform: 'scale(1.03)',
        }
        : this.isHovered && this.isSrClosed
          ? { cursor: 'not-allowed' }
          : { cursor: 'default' };
    return this.hoverStyle;
  }

}


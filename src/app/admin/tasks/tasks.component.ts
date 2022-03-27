import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { LovType, KeyType, CompanyType } from 'src/app/Objects';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private appmodule: AppModule) { }

  ngOnInit(): void {
    this.getLov();
    this.getGst();
    this.getComp();

    this.getXchange();
  }

  listLOV: LovType[] = [];
  listGST: any[] = [];
  listXchange: any[] = [];

  listCompany: CompanyType[] = [];
  @ViewChild('lovbody', { read: ViewContainerRef }) lovbody?: ViewContainerRef
  @ViewChild('newrow') newrow?: TemplateRef<any>
  @ViewChild('gstbody', { read: ViewContainerRef }) gstbody?: ViewContainerRef
  @ViewChild('newrowgst') newrowgst?: TemplateRef<any>
  @ViewChildren('tabledata') tabledata?: QueryList<ElementRef>
  @ViewChildren('compdata') compdata?: QueryList<ElementRef>
  @ViewChildren('xdata') xdata?: QueryList<ElementRef>
  @ViewChildren('gstdata') gstdata?: QueryList<ElementRef>
 

  getLov() {
    this.appmodule.runGetCall('GET_ADMIN_LOV', {}).subscribe(
      (data) => { this.listLOV = data['successMsg'] }
    )
  }

  getGst() {
    this.appmodule.runGetCall('GET_ADMIN_GST', {}).subscribe(
      (data) => { this.listGST = data['successMsg'] }
    )
  }

  getComp() {
    this.appmodule.runGetCall('GET_ADMIN_COMP', {}).subscribe(
      (data) => { this.listCompany = data['successMsg'] }
    )
  }
  //feetch xchange value
  getXchange() {
    if (Object.keys(AppModule.LST_XCHANGE).length != 0) {
      Object.keys(AppModule.LST_XCHANGE).forEach(key => {
        Object.keys(AppModule.LST_XCHANGE[key]).forEach(c => {
          this.listXchange.push(
            {
              from: key,
              to: c,
              x: AppModule.LST_XCHANGE[key][c]
            }
          )
        })
      })


    }
    else {
      this.appmodule.runGetCall('XCHANGE', '').subscribe(
        (data) => {
          Object.keys(data['successMsg']).forEach(key => {

            Object.keys(data['successMsg'][key]).forEach(c => {

              this.listXchange.push(
                {
                  from: key,
                  to: c,
                  x: data['successMsg'][key][c]
                }
              )
            })
          })

        }
      )
    }

  }
  //initiate csv backup
  InititeCSVBackup() {

  }
  //find nd update company
  findandupdateCompany() {
    this.compdata?.map(i => {
      let lov: { [index: string]: string } = {};
      (<HTMLTableRowElement>i.nativeElement).childNodes.forEach((j: any) => {
        let key = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).name;
        let val = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).value;
        key ? lov[key] = val : ''
      })
      //this.listCompany.push({ Lov: lov })
    })

  }

  //find nd update xchange
  findandupdateXchange() {
    let templistX: any[] = [];

    this.xdata?.map(i => {
      let xc: { [index: string]: string } = {};

      (<HTMLTableRowElement>i.nativeElement).childNodes.forEach((j: any) => {
        let key = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).name;
        let val = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).value;
        xc[key] = val

      })
      templistX.push(xc);
    })

    let Z = templistX.reduce((pre: any, curr: any) => {
      if (curr.hasOwnProperty('from')) {
        if (pre[curr['from']])
          pre[curr['from']][curr['to']] = curr['x'];
        else {
          let from = curr.from
          let to = curr.to
          let x = curr.x
          pre[from] = {}
          pre[from][to] = x

        }
      }
      return pre;
    }, {})

    this.appmodule.runGetCall('POST_XCHANGE', { XRATE: Z }).subscribe(
      (data) => {
        if (data['successMsg']) {
          alert('Exchange rate updated');
          this.getLov();
        }
      },
      (error) => {
        console.log(error)
        alert('Something went wrong! Try again later')
      },
      () => { console.log('Done') }
    )
  }
  //find nd update lov
  findandupdateLOV() {
    let templistLOV: any[] = [];

    this.tabledata?.map(i => {
      let lov: { [index: string]: string } = {};
      (<HTMLTableRowElement>i.nativeElement).childNodes.forEach((j: any) => {
        let key = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).name;
        let val = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).value;
        key ? lov[key] = val : ''
      })
      templistLOV.push(
        {
          created: '',
          createdby: '',
          id: lov['lid'],
          lovname: lov['lname'],
          lovvalue: lov['lvalue'],
          status: lov['lstatus'],
          updated: '',
          updatedby: ''
        })
    })



    this.appmodule.runGetCall('POST_LOV_ADMIN',
      {
        data: templistLOV.reduce(
          (prev: any, curr: any) => {
            prev.push({ Lov: curr });
            return prev
          }, []
        )
      }).subscribe(
        (data) => {
          if (data['successMsg']) {
            alert('Lov updated');
            this.getLov();
          }
        },
        (error) => {
          console.log(error)
          alert('Something went wrong! Try again later')
        },
        () => { console.log('Done') }
      )
    this.lovbody?.clear();
  }
  //find nd update gst
  findandupdateGST() {
    let templistGST: any[] = [];

    this.gstdata?.map(i => {
      let lov: { [index: string]: any } = {};

      (<HTMLTableRowElement>i.nativeElement).childNodes.forEach((j: any) => {

        let key = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).name;
        let val = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).value;
        key ? lov[key] = val : ''
      })
      let z: any = {}
      z[lov['prodid']] = {}
      z[lov['prodid']]['cgst'] = lov['cgst']
      z[lov['prodid']]['sgst'] = lov['sgst']
      z[lov['prodid']]['igst'] = lov['igst']
      z[lov['prodid']]['discount'] = lov['discount']
      templistGST.push(
        z)

    })
    let Z = templistGST.reduce((pre: any, curr: any) => {
      pre[Object.keys(curr)[0]] = curr[Object.keys(curr)[0]]
      return pre;
    }, {})

    this.appmodule.runGetCall('POST_GST',
      {
        GSTMAP: Z
      }).subscribe(
        (data) => {
          if (data['successMsg']) {
            alert('GST updated');
            this.getGst();
          }
        },
        (error) => {
          console.log(error)
          alert('Something went wrong! Try again later')
        },
        () => { console.log('Done') }
      )

  }
  //Upload bulk gst from a file
  uploadBGST(event: Event) {
    event.preventDefault();

  }
  //upload bulk product from a file
  uploadBProduct(event: Event) {
    event.preventDefault();
    console.log((<HTMLInputElement>event.target).files)
    this.appmodule.runGetCall('BP',{file:(<HTMLInputElement>event.target).files}).subscribe(
      (data)=>{
        alert(data['successMsg'])
      },
      (error)=>{alert(error)},
      ()=>{console.log('done')}
    )

  }
  //uplod bulk invoice from a file
  uploadBInvoice(event: Event) {
    event.preventDefault();

  }

  //
  addLOV() {
    this.lovbody!.insert(this.newrow!.createEmbeddedView(null))
  }
  //
  removethis() {
    this.lovbody!.remove()
  }

  //
  addCompany() {
    this.gstbody!.insert(this.newrowgst!.createEmbeddedView(null))
  }
  //
  removeCompany() {
    this.gstbody!.remove()
  }


}

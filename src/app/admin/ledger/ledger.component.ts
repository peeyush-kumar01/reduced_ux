import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { LedgerType } from 'src/app/Objects';
import { AppModule } from 'src/app/app.module';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(private appmodule: AppModule) { }
  recalculate(): void {
    this.dynamicData = [];
    this.totalCredit = 0;
    this.totalDebit = 0;
    this.totalUnknown = 0;

    this.entry?.map(i => {
      let lov: { [index: string]: string } = {};
      (<HTMLTableRowElement>i.nativeElement).childNodes.forEach((j: any) => {
        let key = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).name;
        let val = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).value;
        key ? lov[key] = val : ''
      })

      if (lov['type'].toLocaleLowerCase() == 'credit' && lov['status'].toLocaleLowerCase() == 'freezed') {
        this.totalCredit = this.totalCredit + Number(lov['amount'])
      } else if (lov['type'].toLocaleLowerCase() == 'debit' && lov['status'].toLocaleLowerCase() == 'freezed') {
        this.totalDebit = this.totalDebit + Number(lov['amount'])
      } else {
        this.totalUnknown = this.totalUnknown + Number(lov['amount'])
      }
      if (lov['currency'] == "") {
        lov['currency'] = 'INR'
      }
      this.dynamicData?.push({ Ledger: lov })
    })

    // console.log(this.dynamicData)
  }

  ngOnInit(): void {
    this.getLedgerList()
  }

  ledgetList?: LedgerType[];
  totalCredit: number = 0
  totalDebit: number = 0
  totalUnknown: number = 0
  dynamicData?: any[]
  @ViewChildren('entry') entry?: QueryList<ElementRef>
  @ViewChild('ledgert') ledgert?: TemplateRef<any>
  @ViewChild('ledgerc', { read: ViewContainerRef }) ledgerc?: ViewContainerRef

  addChild() {
    this.ledgerc!.insert(this.ledgert!.createEmbeddedView(null))
  }

  removeChild() {
    this.ledgerc!.remove()
  }

  saveChild(event: Event) {
    let lov: { [index: string]: string } = {};
    (<HTMLElement>event.target).parentElement?.parentElement?.childNodes.forEach((j: any) => {
      let key = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).name;
      let val = (<HTMLInputElement>(<HTMLTableColElement>j).firstElementChild).value;
      key ? lov[key] = val : ''
    })
    if (lov['type'].toLocaleLowerCase() == 'credit' && lov['status'].toLocaleLowerCase() == 'freezed') {
      this.totalCredit = this.totalCredit + Number(lov['amount'])
    } else if (lov['type'].toLocaleLowerCase() == 'debit' && lov['status'].toLocaleLowerCase() == 'freezed') {
      this.totalDebit = this.totalDebit + Number(lov['amount'])
    } else {
      this.totalUnknown = this.totalUnknown + Number(lov['amount'])
    }
    if (lov['currency'] == "") {
      lov['currency'] = 'INR'
    }
    if (lov['status'] == "") {
      lov['status'] = 'Open'
    }
    if (!(lov['type'] == "Credit" || lov['type'] == "Debit")) {
      alert('Please select type')
      return
    }
    this.putLedgerList([{ Ledger: lov }]);

  }

  freezItem(ledgetList: LedgerType) {
    if (ledgetList.status.toLocaleLowerCase() == 'freezed') {
      alert('Item is alreay freezed')
      return
    }
    ledgetList.status = 'Freezed'
    this.putLedgerList([{ Ledger: ledgetList }]);

  }

  saveAll() {
    this.putLedgerList(this.dynamicData!);

  }

  uploadAll(event: Event) {
    let f = (<HTMLInputElement>event.target).files
    let formdata = new FormData();
    formdata.append('context', 'LEDGER')
    if (f) {
      for (let i = 0; i < f.length; i++) {
        console.log(f[i])
        formdata.append(f[i]['name'], f[i]);
      }
    }

    this.appmodule.runGetCall('UPLOAD', formdata).subscribe(
      (data) => {
        //console.log(data['successMsg'])
      }
    )
  }


  downloadAll() {

  }

  getLedgerList() {
    this.totalCredit = 0;
    this.totalDebit = 0;
    this.totalUnknown = 0;
    this.appmodule.runGetCall('GET_ADMIN_LEDGER', {}).subscribe(
      (data) => {
        if (!data['successMsg']) {
          alert('Something is wrong. Unable to fetch ledger listenerCount.')
        } else {
          this.ledgetList = data['successMsg']
          this.ledgetList?.forEach(lov => {
            if (lov['type'].toLocaleLowerCase() == 'credit' && lov['status'].toLocaleLowerCase() == 'freezed') {
              this.totalCredit = this.totalCredit + Number(lov['amount'])
            } else if (lov['type'].toLocaleLowerCase() == 'debit' && lov['status'].toLocaleLowerCase() == 'freezed') {
              this.totalDebit = this.totalDebit + Number(lov['amount'])
            } else {
              this.totalUnknown = this.totalUnknown + Number(lov['amount'])
            }
            if (lov['currency'] == "") {
              lov['currency'] = 'INR'
            }
          })
        }
      },
      (error) => {
        console.log(error);
        alert(error)
      },
      () => {
        console.log('Done')
      }
    )
  }

  putLedgerList(Obj: any[]) {
    this.appmodule.runGetCall('POST_ADMIN_LEDGER', { data: Obj }).subscribe(
      (data) => {
        if (!data['successMsg']) {
          alert('Something is wrong. Unable to fetch ledger listenerCount.')
        } else {
          alert('Updated.')
          this.getLedgerList()
          this.recalculate()
        }
      },
      (error) => {
        console.log(error);
        alert(error)
      },
      () => {
        console.log('Done')
      }
    )
  }
}

import { Component, Input, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit, DoCheck {

  constructor() { }
  ngDoCheck(): void {
    this.itemdetail = this.invoiceData?this.invoiceData.item.reduce((p: any, c: any) => {
      p.push(JSON.parse(c))
      return p;
    }, []):[]
  }

  ngOnInit(): void {
  }
  itemdetail: any
  @Input() invoiceData: any;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-srinfo',
  templateUrl: './srinfo.component.html',
  styleUrls: ['./srinfo.component.css']
})
export class SrinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SR: { [index: string]: string }[] = [
    {
      srno: '1234',
      date: '1988-11-21',
      status: 'Open',
    },
    {
      srno: '1234',
      date: '1988-11-21',
      status: 'Open',
    },
    {
      srno: '1234',
      date: '1988-11-21',
      status: 'Closed',
    },
    {
      srno: '1234',
      date: '1988-11-21',
      status: 'Open',
    },
  ];
  isSrClosed: boolean = false;
  isHovered: boolean = false;
  hoverStyle: {} = {};
  id: string | undefined = undefined;
  getId($event: Event) {
    this.id = (<HTMLElement>$event.target).attributes.getNamedItem('id')?.value;
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

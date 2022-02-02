import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cominfo',
  templateUrl: './cominfo.component.html',
  styleUrls: ['./cominfo.component.css']
})
export class CominfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filterTerm:any='';
  
  textArea: number[] = [1, 2, 3, 4];
  isCollapsed: boolean [] = [];
}

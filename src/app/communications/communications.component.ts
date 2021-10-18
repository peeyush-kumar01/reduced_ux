
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css'],
})
export class CommunicationsComponent implements OnInit {
  textArea: number[] = [1, 2, 3, 4];
  isCollapsed: boolean [] = [];
  constructor() {}

  ngOnInit(): void {}
}
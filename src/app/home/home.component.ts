
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appmodule: AppModule) { }

  ngOnInit(): void {
    this.appmodule.runGetCall('GET_ORDER', {}).subscribe(
      (data) => {

        if (data['successMsg']) {
          this.ODR = data['successMsg']
            .filter((obj: any) => {
              return obj.Orders && (obj.Orders.status
                .toUpperCase() == 'PENDING' || obj.Orders.status
                  .toUpperCase() == 'IN-PROGRESS')
            })
            .reduce((prev: any, curr: any) => {
              prev.push({ orderid: curr.Orders.orderid, orderdate: curr.Orders.created, orderamount: curr.Orders.finalamount, cur: curr.Orders.currency })
              return prev
            }, [])
        }
      }
    )

    this.appmodule.runGetCall('GET_SR', {}).subscribe(
      (data) => {

        if (data['successMsg']) {
          this.SRS = data['successMsg']
            .filter((obj: any) => {
              return obj.status
                .toUpperCase() == 'OPEN'
            })
            .reduce((prev: any, curr: any) => {
              prev.push({ srno: curr.srno, srdate: curr.created })
              return prev
            }, [])
        }
      }
    )

    this.appmodule.runGetCall('GET_STAT', {}).subscribe(
      (data) => {
        this.stat = data['successMsg']
        this.barChartData.datasets = [
          { data: [this.stat['totalamount'], this.stat['totalamount30']], label: 'Total', backgroundColor: 'Blue' },
          { data: [this.stat['totaldiscount'], this.stat['totaldiscount30']], label: 'Savings', backgroundColor: 'Green' }
        ]
        this.chart?.update();
      }
    )

  }


  setcontext(event: Event) {
    (<HTMLInputElement>event.currentTarget).getAttribute('aria-current') == 'false'
      ? (<HTMLInputElement>event.currentTarget).setAttribute('aria-current', 'true')
      : (<HTMLInputElement>event.currentTarget).setAttribute('aria-current', 'false')

    if ((<HTMLInputElement>event.currentTarget).getAttribute('aria-current') == 'false') {
      (<HTMLInputElement>event.currentTarget).setAttribute('class', 'list-group-item list-group-item-action')
    } else {
      (<HTMLInputElement>event.currentTarget).setAttribute('class', 'list-group-item list-group-item-action active')
    }

  }

  SRS: { [index: string]: any }[] = []
  ODR: { [index: string]: any }[] = []
  stat: { [index: string]: any } = {}

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['Overall', 'This month'],
    datasets: [
      { data: [0,0], label: 'Total', backgroundColor: 'Blue' },
      { data: [0,0], label: 'Savings', backgroundColor: 'Green' }
    ]
  };

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
}
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'CALORIES BURNED'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Activity',
        colorByPoint: true,
        data: [{
          name: 'Walk',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Run',
          y: 11.84
        }, {
          name: 'Cycle',
          y: 10.85
        }, {
          name: 'Jog',
          y: 4.67
        }, {
          name: 'Yoga',
          y: 4.18
        }, {
          name: 'Swimming',
          y: 1.64
        }, {
          name: 'Dance',
          y: 1.6
        }, {
          name: 'Tennis',
          y: 1.2
        }, {
          name: 'Badminton',
          y: 2.61
        }]
      
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
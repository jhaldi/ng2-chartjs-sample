import { Component, ElementRef } from '@angular/core';

import Chart = require("chart.js");

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent {

    constructor(private elementRef: ElementRef) { }

    private myChart: any;
    private c: any;
    private ctx: any;

    ngOnInit() {

        this.c = this.elementRef.nativeElement.querySelector('#test1');
        this.ctx = this.c.getContext("2d");
        this.myChart = new Chart(this.ctx,
            {
                type: this.type,
                data: this.data,
                options: this.options
            }
        );

    }

    data = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [
            {
                label: "My First dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#006400'
            },
            {
                data: [38, 16, 60, 50, 48, 33, 5],
                label: 'Series A',
                backgroundColor: '#640E1C'
            },
            {
                data: [28, 48, 40, 19, 86, 27, 90],
                label: 'Series B',
                backgroundColor: 'pink'
            }
        ]
    };

    //Chart options
    type = 'bar';
    options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Gross and Net'
        },
        legend: {
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                },
                stacked: false
            }],
            xAxes: [{
                stacked: false
            }]
        }
    };
}

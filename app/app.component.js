"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Chart = require("chart.js");
var AppComponent = (function () {
    function AppComponent(elementRef) {
        this.elementRef = elementRef;
        this.title = "Bound title string";
        this.data = {
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
        this.type = 'bar';
        this.options = {
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
    AppComponent.prototype.ngOnInit = function () {
        this.c = this.elementRef.nativeElement.querySelector('#test1');
        this.ctx = this.c.getContext("2d");
        this.myChart = new Chart(this.ctx, {
            type: this.type,
            data: this.data,
            options: this.options
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, OnInit, ViewChild, ElementRef ,VERSION} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import * as  Highcharts from 'highcharts';
import  More from 'highcharts/highcharts-more';
More(Highcharts);
import  Tree from 'highcharts/modules/treemap';
Tree(Highcharts);
import  Heatmap from 'highcharts/modules/heatmap';
Heatmap(Highcharts);
// Load the exporting module.
import  Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  name = `Group z`;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;

  constructor() {
  }
  ngOnInit() {
    Highcharts.chart(this.container.nativeElement, {
          colorAxis: {
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    /**
     * The shape of the data
     */
    series: [{
        type: 'treemap',
        //layoutAlgorithm: 'squarified',
        data: [{
            name: 'ROSE',
            value: 1345,
            colorValue: 1
        }, {
            name: 'DENNY',
            value: 200,
            colorValue: 2
        }, {
            name: 'FRETWELL',
            value: 123,
            colorValue: 3
        }, {
            name: 'FRIDAY',
            value: 155,
            colorValue: 4
        }, {
            name: 'ATAC',
            value: 2,
            colorValue: 5
        }, {
            name: 'ATKNS',
            value: 2,
            colorValue: 6
        }, {
            name: 'BSAC ',
            value: 1,
            colorValue: 7
        },{
            name: 'BIOIN',
            value: 2,
            colorValue: 6
        },{
            name: 'BRNRD',
            value: 2,
            colorValue: 6
        },{
            name: 'BURSN',
            value: 2,
            colorValue: 6
        },{
            name: 'CARC',
            value: 2,
            colorValue: 6
        },{
            name: 'COED	',
            value: 2,
            colorValue: 6
        },{
            name: 'CHHS',
            value: 2,
            colorValue: 6
        },{
            name: 'COLVD	',
            value: 2,
            colorValue: 6
        },{
            name: 'CONE',
            value: 2,
            colorValue: 6
        },{
            name: 'CITY',
            value: 2,
            colorValue: 6
        },{
            name: 'CYPRE',
            value: 2,
            colorValue: 6
        },{
            name: 'DUKE',
            value: 2,
            colorValue: 6
        },{
            name: 'EPIC',
            value: 2,
            colorValue: 6
        },{
            name: 'FRET',
            value: 2,
            colorValue: 6
        },{
            name: 'FRIDY',
            value: 2,
            colorValue: 6
        },{
            name: 'GRNGR',
            value: 2,
            colorValue: 6
        },{
            name: 'GRIGG',
            value: 2,
            colorValue: 6
        },{
            name: 'GYMNS',
            value: 2,
            colorValue: 6
        },{
            name: 'HAWTH',
            value: 2,
            colorValue: 6
        },{
            name: 'JBCB',
            value: 2,
            colorValue: 6
        },{
            name: 'KNNDY',
            value: 2,
            colorValue: 6
        },{
            name: 'MACY',
            value: 2,
            colorValue: 6
        },{
            name: 'MCEN',
            value: 2,
            colorValue: 6
        },{
            name: 'MCMIL',
            value: 2,
            colorValue: 6
        },{
            name: 'MEMOR',
            value: 2,
            colorValue: 6
        },{
            name: 'ROBIN',
            value: 2,
            colorValue: 6
        },{
            name: 'ROWE	',
            value: 2,
            colorValue: 6
        },{
            name: 'MEMOR',
            value: 2,
            colorValue: 6
        },{
            name: 'SMITH',
            value: 2,
            colorValue: 6
        },{
            name: 'STORR',
            value: 2,
            colorValue: 6
        },{
            name: 'STUN',
            value: 2,
            colorValue: 6
        },{
            name: 'STORR',
            value: 2,
            colorValue: 6
        },{
            name: 'WINN',
            value: 2,
            colorValue: 6
        },{
            name: 'WITHR',
            value: 2,
            colorValue: 6
        },{
            name: 'WOODW',
            value: 2,
            colorValue: 6
        }]


    }],
    title: {
        text: 'MAC Tracker'
    }
    })
  }

  scroll(data){

  }

}
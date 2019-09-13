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
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css']
})

export class TreemapComponent implements OnInit {
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
            value: 124,
            colorValue: 5
        }, {
            name: 'ATKNS',
            value: 156,
            colorValue: 6
        }, {
            name: 'BSAC ',
            value: 190,
            colorValue: 7
        },{
            name: 'BIOIN',
            value: 40,
            colorValue: 6
        },{
            name: 'BRNRD',
            value: 134,
            colorValue: 6
        },{
            name: 'BURSN',
            value: 90,
            colorValue: 6
        },{
            name: 'CARC',
            value: 20,
            colorValue: 6
        },{
            name: 'COED	',
            value: 25,
            colorValue: 6
        },{
            name: 'CHHS',
            value: 21,
            colorValue: 6
        },{
            name: 'COLVD	',
            value: 93,
            colorValue: 6
        },{
            name: 'CONE',
            value: 78,
            colorValue: 6
        },{
            name: 'CITY',
            value: 90,
            colorValue: 6
        },{
            name: 'CYPRE',
            value: 56,
            colorValue: 6
        },{
            name: 'DUKE',
            value: 36,
            colorValue: 6
        },{
            name: 'EPIC',
            value: 67,
            colorValue: 6
        },{
            name: 'FRET',
            value: 90,
            colorValue: 6
        },{
            name: 'FRIDY',
            value: 25,
            colorValue: 6
        },{
            name: 'GRNGR',
            value: 27,
            colorValue: 6
        },{
            name: 'GRIGG',
            value: 256,
            colorValue: 6
        },{
            name: 'GYMNS',
            value: 234,
            colorValue: 6
        },{
            name: 'HAWTH',
            value: 213,
            colorValue: 6
        },{
            name: 'JBCB',
            value: 245,
            colorValue: 6
        },{
            name: 'KNNDY',
            value: 211,
            colorValue: 6
        },{
            name: 'MACY',
            value: 109,
            colorValue: 6
        },{
            name: 'MCEN',
            value: 290,
            colorValue: 6
        },{
            name: 'MCMIL',
            value: 24,
            colorValue: 6
        },{
            name: 'MEMOR',
            value: 213,
            colorValue: 6
        },{
            name: 'ROBIN',
            value: 234,
            colorValue: 6
        },{
            name: 'ROWE	',
            value: 256,
            colorValue: 6
        },{
            name: 'MEMOR',
            value: 213,
            colorValue: 6
        },{
            name: 'SMITH',
            value: 213,
            colorValue: 6
        },{
            name: 'STORR',
            value: 22,
            colorValue: 6
        },{
            name: 'STUN',
            value: 245,
            colorValue: 6
        },{
            name: 'STORR',
            value: 223,
            colorValue: 6
        },{
            name: 'WINN',
            value: 211,
            colorValue: 6
        },{
            name: 'WITHR',
            value: 190,
            colorValue: 6
        },{
            name: 'WOODW',
            value: 90,
            colorValue: 6
        }]


    }],
    title: {
        text: 'MAC Tracker'
    }
    })
  }

  scroll(data){
      for(const datPoint of data){
        // Update the value of 14 data points
      }
  }

}

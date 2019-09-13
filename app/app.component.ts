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

  constructor() {
  }
  ngOnInit() {}
}
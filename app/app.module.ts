import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TreemapComponent } from './treemap/treemap.component';
import { TreemapService } from './services/treemap.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule, JsonpModule ],
  declarations: [ AppComponent, TreemapComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TreemapService],
})
export class AppModule { }

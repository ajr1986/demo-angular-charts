import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { LineComponent } from './components/charts/line.component';
import { BarComponent } from './components/charts/bar.component';

import { AppRoutingModule } from './app.routes';
import { DoughnutComponent } from './components/charts/doughnut.component';
import { RadarComponent } from './components/charts/radar.component';
import { PieComponent } from './components/charts/pie.component';
import { PolarAreaComponent } from './components/charts/polar-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    BarComponent,
    DoughnutComponent,
    RadarComponent,
    PieComponent,
    PolarAreaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

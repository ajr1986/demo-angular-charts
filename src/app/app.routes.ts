import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineComponent } from './components/charts/line.component';
import { BarComponent } from './components/charts/bar.component';
import { DoughnutComponent } from './components/charts/doughnut.component';
import { RadarComponent } from './components/charts/radar.component';
import { PieComponent } from './components/charts/pie.component';
import { PolarAreaComponent } from './components/charts/polar-area.component';

const routes: Routes = [
    { path: 'line', component: LineComponent },
    { path: 'bar', component: BarComponent },
    { path: 'doughnut', component: DoughnutComponent },
    { path: 'radar', component: RadarComponent },
    { path: 'pie', component: PieComponent },
    { path: 'polar-area', component: PolarAreaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'line' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

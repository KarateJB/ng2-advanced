import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { FlotComponent } from './flot/flot.component';
import { RadialComponent } from './radial/radial.component';
import { RickshawComponent } from './rickshaw/rickshaw.component';
// import { ChartsComponent } from './charts.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  declarations: [
    // ChartsComponent,
    FlotComponent,
    RadialComponent,
    RickshawComponent
  ]
})
export class ChartsModule { }

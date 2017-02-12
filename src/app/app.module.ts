import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from './charts/charts.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AppRoutingModule //AppRoutingModule must be last imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

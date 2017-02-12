import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: 'dashboard',       component: DashboardComponent },
  { path: 'cards/:type',     component: CardsComponent },
  { path: 'charts/:user',    loadChildren: './charts/charts.module#ChartsModule' }, //For lazy load
  fallbackRoute
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})], //For pre-load
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

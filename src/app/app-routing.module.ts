import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';



import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards/:type',     component: CardsComponent },
  fallbackRoute
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

import { LoginRouteGuard } from './login-route-guard';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PreloadAllModules, Route, Routes, RouterModule, CanDeactivate } from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';
import { InputRouteGuard } from './input-route-guard';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'form', component: FormComponent },
      { path: 'reactiveform', component: ReactiveformComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent, canActivate:[LoginRouteGuard] },
      { path: 'charts/:username', loadChildren: './charts/charts.module#ChartsModule' },
    ]
  },
  {path: 'login', component: LoginComponent, canDeactivate:[InputRouteGuard]},
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

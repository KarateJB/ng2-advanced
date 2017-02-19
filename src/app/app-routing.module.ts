import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Route,  Routes,  RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: 'form',   component: FormComponent },
  { path: 'reactiveform',   component: ReactiveformComponent },
  { path: 'dashboard',   component: DashboardComponent },
  { path: 'cards/:type', component: CardsComponent },
  { path: 'charts/:username',
    loadChildren: './charts/charts.module#ChartsModule'
  },
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

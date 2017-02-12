import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { Page2Component } from '../page2/page2.component';


export const fallbackRoute: Route =
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  };
//The uri which not match any will be math this one, only apply this when go live on production.

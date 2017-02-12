<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';


export const fallbackRoute: Route = {
  path: '**',
  redirectTo: '/dashboard',
  pathMatch: 'full'
};

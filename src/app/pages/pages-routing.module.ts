import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{ path: '', component: PagesComponent,children:[
  {
    path:'',
    component:LandingComponent
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

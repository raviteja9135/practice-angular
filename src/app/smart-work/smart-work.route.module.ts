import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmartWorkComponent } from './smart-work.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SmartWorkComponent,
    children: [
      
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  }
];


@NgModule({
  declarations: [SmartWorkComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SmartWorkRouteModule { }

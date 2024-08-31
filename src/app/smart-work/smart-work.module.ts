import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmartWorkRouteModule } from './smart-work.route.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SmartWorkRouteModule
  ]
})
export class SmartWorkModule { 
  constructor(){
    console.log('entrer Smart Module');
  }
  
}

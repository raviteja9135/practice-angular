import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmartWorkRouteModule } from './smart-work.route.module';
import { DashboardTileComponent } from './dashboard/dashboard-tile/dashboard-tile.component';



@NgModule({
  declarations: [DashboardComponent, DashboardTileComponent],
  imports: [
    CommonModule,
    SmartWorkRouteModule
  ]
})
export class SmartWorkModule {
  constructor() {
    console.log('entrer Smart Module');
  }

}

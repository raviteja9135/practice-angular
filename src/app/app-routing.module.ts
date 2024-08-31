import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/smart-work',
  pathMatch:'full'
  },
  {
  path:'smart-work',
  loadChildren: () => import('./smart-work/smart-work.module').then(m => m.SmartWorkModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

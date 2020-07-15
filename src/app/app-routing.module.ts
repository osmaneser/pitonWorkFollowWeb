import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { WorkComponent } from './work/work.component';
import { AddWorkComponent } from './add-work/add-work.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'', component:MainComponent, children:[
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component:DashboardComponent
    },
    {
      path: 'works',
      component:WorkComponent
    },
    {
      path: 'add',
      component:AddWorkComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';

const routes: Routes = [
  {path: '', redirectTo: '/starter/home', pathMatch:'full'},
  {path:'home', component:StarterComponent }];
/*const routes: Routes = [
  {path: '', component: StarterComponent,children:[
      {path: '', redirectTo: '/starter/home', pathMatch:'full'},
      {path:'home', component:StarterCategoriesComponent }
    ]
  }
];*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }

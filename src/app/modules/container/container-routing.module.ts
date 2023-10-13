import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import {ComponentDetailComponent} from "./components/component-detail/component-detail.component";
import {ComponentAvailabilityComponent} from "./components/component-availability/component-availability.component";

const routes: Routes = [
  { path: '', component: ContainerComponent,children:[
      {path:'',redirectTo:'/container/detail',pathMatch:"full"},
      {path:'detail/:_id' , component:ComponentDetailComponent},
      {path:'availability/:_id' , component:ComponentAvailabilityComponent}
          ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }

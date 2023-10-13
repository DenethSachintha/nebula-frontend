import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'',redirectTo:'starter',pathMatch:"full"},
  { path: 'starter', loadChildren: () => import('./modules/starter/starter.module').then(m => m.StarterModule) },
  { path: 'container', loadChildren: () => import('./modules/container/container.module').then(m => m.ContainerModule) },
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { ComponentAvailabilityComponent } from './components/component-availability/component-availability.component';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContainerComponent,
    ComponentAvailabilityComponent,
    ComponentDetailComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    FormsModule
  ]
})
export class ContainerModule { }

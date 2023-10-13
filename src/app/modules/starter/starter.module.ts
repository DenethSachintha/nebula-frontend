import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StarterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CusmtorRoutingModule } from './cusmtor-routing.module';
import { SubCumsterComponent } from './sub-cumster/sub-cumster.component';
import { MalecustotComponent } from './malecustot/malecustot.component';


@NgModule({
  declarations: [
    SubCumsterComponent,
    MalecustotComponent
  ],
  imports: [
    CommonModule,
    CusmtorRoutingModule
  ]
})
export class CusmtorModule { }

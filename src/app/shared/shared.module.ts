import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    HeaderModule
  ],
  exports: [
    MaterialModule,
    HeaderModule
  ]
})
export class SharedModule { }

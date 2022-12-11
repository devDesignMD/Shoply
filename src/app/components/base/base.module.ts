import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumpComponent } from './breadcrump/breadcrump.component';



@NgModule({
  declarations: [
    BreadcrumpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumpComponent
  ]
})
export class BaseModule { }

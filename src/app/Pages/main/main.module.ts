import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';

import { Page1Module } from './../../Organisms/page1/page1.module';



@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    Page1Module
  ]
})
export class MainModule { }

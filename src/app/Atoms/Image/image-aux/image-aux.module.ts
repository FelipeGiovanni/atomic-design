import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageAuxComponent } from './image-aux.component';


@NgModule({
  declarations: [ImageAuxComponent],
  exports: [ImageAuxComponent],
  imports: [
    CommonModule
  ]
})
export class ImageAuxModule { }

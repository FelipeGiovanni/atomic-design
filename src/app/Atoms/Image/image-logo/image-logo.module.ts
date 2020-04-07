import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLogoComponent } from './image-logo.component';


@NgModule({
  declarations: [ImageLogoComponent],
  exports: [ImageLogoComponent],
  imports: [
    CommonModule
  ]
})
export class ImageLogoModule { }

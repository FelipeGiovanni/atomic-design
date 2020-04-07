import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageMainComponent } from './image-main.component';



@NgModule({
  declarations: [ImageMainComponent],
  exports: [ImageMainComponent],
  imports: [
    CommonModule
  ]
})
export class ImageMainModule { }

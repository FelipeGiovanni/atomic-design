import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageAvatarComponent } from './image-avatar.component';



@NgModule({
  declarations: [ImageAvatarComponent],
  exports: [ImageAvatarComponent],
  imports: [
    CommonModule
  ]
})
export class ImageAvatarModule { }

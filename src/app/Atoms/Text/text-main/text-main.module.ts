import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMainComponent } from './text-main.component';



@NgModule({
  declarations: [TextMainComponent],
  exports: [TextMainComponent],
  imports: [
    CommonModule
  ]
})
export class TextMainModule { }

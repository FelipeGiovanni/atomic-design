import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSubtitleComponent } from './text-subtitle.component';



@NgModule({
  declarations: [TextSubtitleComponent],
  exports: [TextSubtitleComponent],
  imports: [
    CommonModule
  ]
})
export class TextSubtitleModule { }

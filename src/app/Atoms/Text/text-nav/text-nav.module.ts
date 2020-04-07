import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextNavComponent } from './text-nav.component';



@NgModule({
  declarations: [TextNavComponent],
  exports: [TextNavComponent],
  imports: [
    CommonModule
  ]
})
export class TextNavModule { }

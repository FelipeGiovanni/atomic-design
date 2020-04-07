import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextTittleComponent } from './text-tittle.component';



@NgModule({
  declarations: [TextTittleComponent],
  exports: [TextTittleComponent],
  imports: [
    CommonModule
  ]
})
export class TextTittleModule { }

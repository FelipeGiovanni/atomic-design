import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextDescribeComponent } from './text-describe.component';



@NgModule({
  declarations: [TextDescribeComponent],
  exports: [TextDescribeComponent],
  imports: [
    CommonModule
  ]
})
export class TextDescribeModule { }

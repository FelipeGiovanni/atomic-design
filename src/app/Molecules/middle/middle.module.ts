import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiddleComponent } from './middle.component';

import { ImageMainModule } from './../../Atoms/Image/image-main/image-main.module';
import { TextTittleModule } from './../../Atoms/Text/text-tittle/text-tittle.module';

@NgModule({
  declarations: [MiddleComponent],
  exports: [MiddleComponent],
  imports: [
    CommonModule,
    ImageMainModule,
    TextTittleModule
  ]
})
export class MiddleModule { }

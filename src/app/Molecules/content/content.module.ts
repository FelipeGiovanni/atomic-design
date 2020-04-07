import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';

import { ImageAuxModule } from './../../Atoms/Image/image-aux/image-aux.module';
import { TextMainModule } from './../../Atoms/Text/text-main/text-main.module';
import { TextTittleModule } from './../../Atoms/Text/text-tittle/text-tittle.module';

@NgModule({
  declarations: [ContentComponent],
  exports: [ContentComponent],
  imports: [
    CommonModule,
    ImageAuxModule,
    TextMainModule,
    TextTittleModule
  ]
})
export class ContentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescribeCardsComponent } from './describe-cards.component';

import { TextSubtitleModule } from './../../Atoms/Text/text-subtitle/text-subtitle.module';
import { ImageAuxModule } from './../../Atoms/Image/image-aux/image-aux.module';
import { TextDescribeModule } from './../../Atoms/Text/text-describe/text-describe.module';

@NgModule({
  declarations: [DescribeCardsComponent],
  exports: [DescribeCardsComponent],
  imports: [
    CommonModule,
    TextSubtitleModule,
    ImageAuxModule,
    TextDescribeModule
  ]
})
export class DescribeCardsModule { }

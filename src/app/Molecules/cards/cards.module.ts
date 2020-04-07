import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from './cards.component';

import { ImageAuxModule } from './../../Atoms/Image/image-aux/image-aux.module';

@NgModule({
  declarations: [CardsComponent],
  exports: [CardsComponent],
  imports: [
    CommonModule,
    ImageAuxModule
  ]
})
export class CardsModule { }

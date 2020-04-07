import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1Component } from './page1.component';

import { ContentModule } from './../../Molecules/content/content.module';
import { CardsModule } from './../../Molecules/cards/cards.module';
import { MiddleModule } from './../../Molecules/middle/middle.module';
import { DescribeCardsModule } from './../../Molecules/describe-cards/describe-cards.module';

@NgModule({
  declarations: [Page1Component],
  exports: [Page1Component],
  imports: [
    CommonModule,
    ContentModule,
    CardsModule,
    MiddleModule,
    DescribeCardsModule,
  ]
})
export class Page1Module { }

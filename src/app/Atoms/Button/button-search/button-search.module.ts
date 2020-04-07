import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSearchComponent} from './button-search.component';

@NgModule({
  declarations: [
    ButtonSearchComponent
  ],
  exports: [
    ButtonSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ButtonSearchModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoginComponent } from './button-login.component';


@NgModule({
  declarations: [ButtonLoginComponent],
  exports: [ButtonLoginComponent],
  imports: [
    CommonModule
  ]
})
export class ButtonLoginModule { }

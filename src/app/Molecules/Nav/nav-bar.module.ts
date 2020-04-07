import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar.component';

import { ButtonLoginModule } from '../../Atoms/Button/button-login/button-login.module';
import { ImageLogoModule } from '../../Atoms/Image/image-logo/image-logo.module';
import { TextNavModule } from './../../Atoms/Text/text-nav/text-nav.module';

@NgModule({
  declarations: [NavBarComponent],
  exports:[NavBarComponent],
  imports: [
    CommonModule,
    ButtonLoginModule,
    ImageLogoModule,
    TextNavModule
  ]
})
export class NavBarModule { }

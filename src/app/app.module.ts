import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//ATOMOS
//buttons
import { ButtonLoginModule } from './Atoms/Button/button-login/button-login.module';
import { ButtonSearchModule } from './Atoms/Button/button-search/button-search.module';
//images
import { ImageAuxModule } from './Atoms/Image/image-aux/image-aux.module';
import { ImageAvatarModule } from './Atoms/Image/image-avatar/image-avatar.module';
import { ImageLogoModule } from './Atoms/Image/image-logo/image-logo.module';
import { ImageMainModule } from './Atoms/Image/image-main/image-main.module';
//texts
import { TextDescribeModule } from './Atoms/Text/text-describe/text-describe.module';
import { TextMainModule } from './Atoms/Text/text-main/text-main.module';
import { TextNavModule } from './Atoms/Text/text-nav/text-nav.module';
import { TextSubtitleModule } from './Atoms/Text/text-subtitle/text-subtitle.module';
import { TextTittleModule } from './Atoms/Text/text-tittle/text-tittle.module';

//MOLECULAS
import { CardsModule } from './Molecules/cards/cards.module';
import { ContentModule } from './Molecules/content/content.module';
import { DescribeCardsModule } from './Molecules/describe-cards/describe-cards.module';
import { FooterModule } from './Molecules/footer/footer.module';
import { MiddleModule } from './Molecules/middle/middle.module';
import { NavBarModule } from './Molecules/Nav/nav-bar.module';

//ORGANISMOS
import { Page1Module } from './Organisms/page1/page1.module';

//PAGES
import { MainModule } from './Pages/main/main.module';


//TEMPLATES



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonSearchModule,
    ButtonLoginModule,
    TextMainModule,
    TextSubtitleModule,
    TextNavModule,
    NavBarModule,
    ImageMainModule,
    ImageAvatarModule,
    ImageAuxModule,
    ImageLogoModule,
    DescribeCardsModule,
    ContentModule,
    CardsModule,
    MiddleModule,
    Page1Module,
    TextTittleModule,
    TextDescribeModule,
    FooterModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

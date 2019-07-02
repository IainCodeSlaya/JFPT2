import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginheaderComponent } from './components/loginheader/loginheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { PanelsComponent } from './components/panels/panels.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    LoginheaderComponent,
    FooterComponent,
    SubscribeComponent,
    PanelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

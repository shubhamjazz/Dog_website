import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { AdoptionComponent } from './pages/adoption/adoption.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HappydogComponent } from './pages/happydog/happydog.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginsignComponent } from './pages/loginsign/loginsign.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdoptionComponent,
    ContactComponent,
    HappydogComponent,
    HomeComponent,
    ServiceComponent,
    ShopComponent,
    LoginsignComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

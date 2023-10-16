import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFileComponent } from './first-file/first-file.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DisplayContactComponent } from './display-contact/display-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFileComponent,
    LoginComponent,
    SignUpComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    DisplayContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

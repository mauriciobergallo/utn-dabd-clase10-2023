import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { ChildComponent } from './secure/child/child.component';
import { PublicComponent } from './public/public.component';
import { PublicChildComponent } from './public/public-child/public-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecureComponent,
    ChildComponent,
    PublicComponent,
    PublicChildComponent,
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

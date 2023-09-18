import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise01Component } from './components/exercise01/exercise01.component';
import { Exercise02Component } from './components/exercise02/exercise02.component';
import { Exercise03Component } from './components/exercise03/exercise03.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise01Component,
    Exercise02Component,
    Exercise03Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

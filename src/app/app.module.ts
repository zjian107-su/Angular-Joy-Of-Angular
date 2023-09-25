import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecursiveNavComponent } from './components/recursive-nav/recursive-nav.component';
import { RecursiveNavChildComponent } from './components/recursive-nav/recursive-nav-child/recursive-nav-child.component';
import { FilteredCityComponent } from './components/filtered-city/filtered-city.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursiveNavComponent,
    RecursiveNavChildComponent,
    FilteredCityComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

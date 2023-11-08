import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecursiveNavComponent } from './components/recursive-nav/recursive-nav.component';
import { RecursiveNavChildComponent } from './components/recursive-nav/recursive-nav-child/recursive-nav-child.component';
import { FilteredCityComponent } from './components/filtered-city/filtered-city.component';
import { TodoComponent } from './components/todo/todo.component';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { FibonacciSequenceComponent } from './components/fibonacci-sequence/fibonacci-sequence.component';
import { CounterComponent } from './components/counter/counter.component';
import { VoteSystemComponent } from './components/vote-system/vote-system.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { StructuralComponent } from './components/custom-directive/structural/structural.component';
import { AttributeComponent } from './components/custom-directive/attribute/attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursiveNavComponent,
    RecursiveNavChildComponent,
    FilteredCityComponent,
    TodoComponent,
    PalindromeComponent,
    FibonacciSequenceComponent,
    CounterComponent,
    VoteSystemComponent,
    CustomDirectiveComponent,
    StructuralComponent,
    AttributeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

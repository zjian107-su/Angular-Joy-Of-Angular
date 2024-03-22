import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // for Todo Component
import { ReactiveFormsModule } from '@angular/forms'; // for ViewChild component

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
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { ObservablesComponent } from './components/rxjs/observables/observables.component';
import { OperatorsComponent } from './components/rxjs/operators/operators.component';
import { SubjectsComponent } from './components/rxjs/subjects/subjects.component';
import { ErrorHandlingComponent } from './components/rxjs/operators/error-handling/error-handling.component';
import { FilteringComponent } from './components/rxjs/operators/filtering/filtering.component';
import { JoinCreationComponent } from './components/rxjs/operators/join-creation/join-creation.component';
import { OtherOperatorsComponent } from './components/rxjs/operators/other-operators/other-operators.component';
import { TransformationComponent } from './components/rxjs/operators/transformation/transformation.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { AddTodoComponent } from './components/ngrx/components/add-todo/add-todo.component';
import { SearchComponent } from './components/ngrx/components/search/search.component';
import { TodoItemComponent } from './components/ngrx/components/todo-item/todo-item.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './components/ngrx/store/todo/todo.reducer';
import { TodoEffects } from './components/ngrx/store/todo/todo.effects';
import { SwapComponent } from './components/swap/swap.component';
import { TabsWithChildComponent } from './components/tabs-with-child/tabs-with-child.component';
import { ChildComponent } from './components/tabs-with-child/components/child/child.component';
import { ViewchildFocusComponent } from './components/viewchild-focus/viewchild-focus.component';
import { ViewChildChildComponent } from './components/viewchild-focus/components/viewchild-child/viewchild-child.component';
import { UuidComponent } from './components/uuid/uuid.component';
import { ForkJoinComponent } from './components/fork-join/fork-join.component';


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
    RxjsComponent,
    ObservablesComponent,
    OperatorsComponent,
    SubjectsComponent,
    ErrorHandlingComponent,
    FilteringComponent,
    JoinCreationComponent,
    OtherOperatorsComponent,
    TransformationComponent,
    NgrxComponent,
    AddTodoComponent,
    SearchComponent,
    TodoItemComponent,
    SwapComponent,
    TabsWithChildComponent,
    ChildComponent,
    ViewchildFocusComponent,
    ViewChildChildComponent,
    UuidComponent,
    ForkJoinComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ todo: todoReducer }), // Register your reducers, the key represents the name of the slice of state in the store (used when creating feature selectors)
    EffectsModule.forRoot([TodoEffects]), // Register your effects
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), // enabling NgRx devtools, which you can then use the Redux devtools in your browser to check the states and actions
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

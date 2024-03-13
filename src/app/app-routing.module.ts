import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursiveNavComponent } from './components/recursive-nav/recursive-nav.component';
import { FilteredCityComponent } from './components/filtered-city/filtered-city.component';
import { TodoComponent } from './components/todo/todo.component';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { FibonacciSequenceComponent } from './components/fibonacci-sequence/fibonacci-sequence.component';
import { CounterComponent } from './components/counter/counter.component';
import { VoteSystemComponent } from './components/vote-system/vote-system.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { ObservablesComponent } from './components/rxjs/observables/observables.component';
import { OperatorsComponent } from './components/rxjs/operators/operators.component';
import { SubjectsComponent } from './components/rxjs/subjects/subjects.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { SwapComponent } from './components/swap/swap.component';
import { TabsWithChildComponent } from './components/tabs-with-child/tabs-with-child.component';

const routes: Routes = [
  {
    path: 'recursive-nav',
    component: RecursiveNavComponent,
  },
  {
    path: 'filtered-city',
    component: FilteredCityComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'palindrome',
    component: PalindromeComponent,
  },
  {
    path: 'fibonacci',
    component: FibonacciSequenceComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'vote-system',
    component: VoteSystemComponent,
  },
  {
    path: 'custom-directives',
    component: CustomDirectiveComponent,
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
    children: [
      {
        path: 'observables',
        component: ObservablesComponent,
      },
      {
        path: 'operators',
        component: OperatorsComponent,
      },
      {
        path: 'subjects',
        component: SubjectsComponent,
      },
    ],
  },
  {
    path: 'ngrx',
    component: NgrxComponent,
  },
  {
    path: 'swap',
    component: SwapComponent,
  },
  {
    path: 'tab-with-child',
    component: TabsWithChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

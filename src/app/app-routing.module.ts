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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

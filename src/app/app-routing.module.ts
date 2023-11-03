import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursiveNavComponent } from './components/recursive-nav/recursive-nav.component';
import { FilteredCityComponent } from './components/filtered-city/filtered-city.component';
import { TodoComponent } from './components/todo/todo.component';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { FibonacciSequenceComponent } from './components/fibonacci-sequence/fibonacci-sequence.component';
import { CounterComponent } from './components/counter/counter.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

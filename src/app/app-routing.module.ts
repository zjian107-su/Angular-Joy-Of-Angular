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
import { ViewchildFocusComponent } from './components/viewchild-focus/viewchild-focus.component';
import { UuidComponent } from './components/uuid/uuid.component';
import { ForkJoinComponent } from './components/fork-join/fork-join.component';
import { ObservableCountComponent } from './components/observable-count/observable-count.component';
import { ObservableListComponent } from './components/observable-list/observable-list.component';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';
import { LayoutCssComponent } from './components/layout-css/layout-css.component';
import { RegiFormComponent } from './components/regi-form/regi-form.component';
import { InterceptorGuardComponent } from './components/interceptor-guard/interceptor-guard.component';
import { InterceptorFormComponent } from './components/interceptor-guard/components/interceptor-form/interceptor-form.component';
import { InterceptorListComponent } from './components/interceptor-guard/components/interceptor-list/interceptor-list.component';
import { AuthGuard } from './components/interceptor-guard/guards/user-guard.guard';

// Routing can make the application more user-friendly and easier to navigate. Not even mentioning the SEO benefits and lazy loading. For example, if we don't plan to initiate all the ngOnInit at once, we can use lazy loading to load the components only when the user navigates to them. This way, the application will load faster and be more efficient.
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
  {
    path: 'viewchild',
    component: ViewchildFocusComponent,
  },
  {
    path: 'uuid',
    component: UuidComponent,
  },
  {
    path: 'fork-join',
    component: ForkJoinComponent,
  },
  {
    path: 'observable-count',
    component: ObservableCountComponent,
  },
  {
    path: 'observable-list',
    component: ObservableListComponent,
  },
  {
    path: 'filter-search',
    component: FilterSearchComponent,
  },
  {
    path: 'layout-css',
    component: LayoutCssComponent,
  },
  {
    path: 'regi-form',
    component: RegiFormComponent,
  },
  {
    path: 'interceptor-guard',
    component: InterceptorGuardComponent,
    children: [
      {
        path: 'form',
        component: InterceptorFormComponent,
      },
      {
        path: 'list',
        component: InterceptorListComponent,
        canActivate: [AuthGuard], // interceptor guard
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursiveNavComponent } from './components/recursive-nav/recursive-nav.component';

const routes: Routes = [
  {
    path: 'recursive-nav',
    component: RecursiveNavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

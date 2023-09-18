import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise01Component } from './components/exercise01/exercise01.component';
import { Exercise02Component } from './components/exercise02/exercise02.component';
import { Exercise03Component } from './components/exercise03/exercise03.component';

const routes: Routes = [
  {
    path: 'exercise01',
    component: Exercise01Component,
  },
  {
    path: 'exercise02',
    component: Exercise02Component,
  },
  {
    path: 'exercise03',
    component: Exercise03Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

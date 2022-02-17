import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import guards

import { NotFoundComponent } from './components/not-found.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

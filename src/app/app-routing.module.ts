import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';

const routes: Routes = [
  { 
      path: '', 
      redirectTo: 'promise', 
      pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'async-await',
    component: AsyncAwaitComponent
  },
  
  { path: '**', redirectTo: 'promise' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

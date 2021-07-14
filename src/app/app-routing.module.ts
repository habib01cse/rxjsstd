import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromiseComponent } from './promise/promise.component';

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
    path: 'promise',
    component: PromiseComponent
  },

  { path: '**', redirectTo: 'promise' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

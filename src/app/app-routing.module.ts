import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
//   { 
//       path: '', 
//       redirectTo: 'home', 
//       pathMatch: 'full',
//   },
  {
    path: 'promise',
    component: PromiseComponent
  },
  
  //{ path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

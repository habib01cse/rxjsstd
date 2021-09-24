import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustObservableComponent } from './observable/cust-observable/cust-observable.component';
import { MapComponent } from './observable/map/map.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';

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
  {
    path: 'observable',
    component: ObservableComponent, 
    children:[
      {path: '', component: ListComponent},
      {path: 'fromEvent', component: FromEventComponent},
      {path: 'interval', component: IntervalComponent},
      {path: 'of-from', component: OfFromComponent},
      {path: 'to-array', component: ToArrayComponent},
      {path: 'cust-observable', component: CustObservableComponent},
      {path: 'map', component: MapComponent},
      {path: 'debounce-time', component: DebounceTimeComponent},
    ]
  },
  {
    path: 'async-await',
    component: AsyncAwaitComponent
  },
  
  { path: '**', redirectTo: 'promise' }
  
  //{ path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

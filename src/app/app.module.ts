import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { PromiseComponent } from './promise/promise.component';
import { HomeComponent } from './home/home.component';
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
<<<<<<< HEAD
=======
import { SubjectComponent } from './observable/subject/subject.component';
import { CompaComponent } from './comps/compa/compa.component';
import { CompbComponent } from './comps/compb/compb.component';
import { CompcComponent } from './comps/compc/compc.component';
>>>>>>> 0645ecfbc1aebf620da015710be75c563b03fe52
   
@NgModule({
  declarations: [
    AppComponent
    , PromiseComponent
    , HomeComponent
    , AsyncAwaitComponent
    , ObservableComponent
    , ListComponent
    , FromEventComponent
    , IntervalComponent
    , OfFromComponent
    , ToArrayComponent
    , CustObservableComponent
<<<<<<< HEAD
    , MapComponent, DebounceTimeComponent
=======
    , MapComponent, DebounceTimeComponent, SubjectComponent, CompaComponent, CompbComponent, CompcComponent
>>>>>>> 0645ecfbc1aebf620da015710be75c563b03fe52

  ],
  imports: [
    BrowserModule
    , LayoutModule
    , AppRoutingModule
    , NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

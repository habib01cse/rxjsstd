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

@NgModule({
  declarations: [
    AppComponent
    , PromiseComponent
    , HomeComponent
    , AsyncAwaitComponent
    , ObservableComponent
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

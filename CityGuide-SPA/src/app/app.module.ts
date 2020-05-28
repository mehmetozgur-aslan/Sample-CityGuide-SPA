import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import {appRoutes} from './routes';
import { CityDetailComponent } from './city/city-detail/city-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    // AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

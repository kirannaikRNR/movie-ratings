import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { RegistrationComponent } from './registration/registration.component';

import { CommonService } from './_service/commonService';
import {RatingModule} from "ngx-rating";






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    RatingModule
  ],
  providers: [
  CommonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

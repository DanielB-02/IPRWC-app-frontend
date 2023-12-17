import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routes";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiHeadersInterceptor} from "./conf/http-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from "./view/login/login.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ItemsDisplayComponent} from "./view/items-display/items-display.component";
import {MainViewComponent} from "./view/main-view/main-view.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    ItemsDisplayComponent,
    MainViewComponent,

  ],
  providers: [
    LoginComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHeadersInterceptor,
      multi: true,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

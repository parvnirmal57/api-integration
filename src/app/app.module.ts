import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetApiComponent } from './get-api/get-api.component';
import { HttpClientModule } from '@angular/common/http';
import { PostApiComponent } from './post-api/post-api.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PutApiComponent } from './put-api/put-api.component';


@NgModule({
  declarations: [
    AppComponent,
    GetApiComponent,
    PostApiComponent,
    PutApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

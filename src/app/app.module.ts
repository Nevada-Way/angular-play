import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MyIframeComponent } from './my-iframe/my-iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    MyIframeComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

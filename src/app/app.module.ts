import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { YtbIframeComponent } from './ytb-iframe/ytb-iframe.component';

@NgModule({
  declarations: [AppComponent, YtbIframeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

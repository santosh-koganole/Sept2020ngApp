import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    //Here we declare Components,Pipe,Directives
  ],
  imports: [
    BrowserModule
  ],
  providers: [],  // here we add services 
  bootstrap: [AppComponent]
})
export class AppModule { }

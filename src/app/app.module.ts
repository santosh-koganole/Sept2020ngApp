import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StringInterpolationComponent} from './String-Interpolation/string-interpoloation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component'

@NgModule({
  declarations: [
    AppComponent,   //Here we declare Components,Pipe,Directives
    StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],  // here we add services 
  bootstrap: [AppComponent]
})
export class AppModule { }

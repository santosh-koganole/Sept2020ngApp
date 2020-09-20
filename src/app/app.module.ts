import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringInterpolationComponent} from './String-Interpolation/string-interpoloation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component'

@NgModule({
  declarations: [
    AppComponent,   //Here we declare Components,Pipe,Directives
    StringInterpolationComponent, PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],  // here we add services 
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {
  AppComponent,
  StringInterpolationComponent,
  PropertyBindingComponent,
  EventBindingComponent,
  TwoWayBindingComponent,
  ProductsComponent,
  ProductThumbnailComponent,
  ShortenPipe,FilterPipe,
  BasicHighlightDirective,
  BetterHighlightDirective
} from "./application.index"

//import { AppComponent } from './app.component';
//import { StringInterpolationComponent} from './String-Interpolation/string-interpoloation.component';
//import { PropertyBindingComponent } from './property-binding/property-binding.component';
//import { EventBindingComponent } from './event-binding/event-binding.component';
//import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
//import { ProductsComponent } from './products/products.component';
//import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
//import { ShortenPipe } from './pipes/shorten.pipe';
//import { FilterPipe } from './pipes/filter.pipe';
//import {BasicHighlightDirective } from './directives/basic-highlight.directive';
//import { BetterHighlightDirective } from './directives/better-highlight.directive'


@NgModule({
  declarations: [
    AppComponent,   //Here we declare Components,Pipe,Directives
    StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent,
     TwoWayBindingComponent, ProductsComponent, ProductThumbnailComponent, ShortenPipe, FilterPipe,
     BasicHighlightDirective,
     BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],  // here we add services 
  bootstrap: [AppComponent]
})
export class AppModule { }

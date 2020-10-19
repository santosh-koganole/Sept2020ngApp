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
  BetterHighlightDirective,
  LoggerService,
  ProductService,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  StudentsComponent,
  ProductDetailsComponent
} from "./application.index"
import { Route, RouterModule,Routes } from '@angular/router';

//const routes :Route[]=[];
 const routes :Route[]=[
 {path : "home", component:DashboardComponent}, //localhost:4200/home - DashboardComponent
 {path : "products", component: ProductsComponent}, //localhost:4200/products - ProductsComponent
 {path:"productDetails/:id",component:ProductDetailsComponent}, 
 {path:"students",component:StudentsComponent},
 {path :"", redirectTo:"home",pathMatch:"full"},
 //{path :"**",redirectTo:"home"}
 ];


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
     BetterHighlightDirective,
     DashboardComponent,
     HeaderComponent,
     FooterComponent,
     StudentsComponent,
     ProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggerService],  // here we add services 
  bootstrap: [AppComponent]
})
export class AppModule { }

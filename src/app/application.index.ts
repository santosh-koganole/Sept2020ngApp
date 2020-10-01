// Barrelling: importing multiple classes from single source, We will create barrels in our application
//to reduce th import statements in app.module.ts

import { from } from 'rxjs';

export * from "./app.component";
export * from "./String-Interpolation/string-interpoloation.component";
export * from "./directives/basic-highlight.directive";
export * from "./directives/better-highlight.directive";
export * from "./event-binding/event-binding.component";
export * from  "./pipes/filter.pipe";
export * from "./pipes/shorten.pipe";
export * from "./products/product-thumbnail/product-thumbnail.component";
export * from "./products/products.component";
export * from "./property-binding/property-binding.component";
export * from "./two-way-binding/two-way-binding.component";


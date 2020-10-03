import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import {Product, products} from './product.data';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productList :any []= products;
  constructor(private logger:LoggerService) {   }

  GetProductList(){
    return  this.productList;
  }
AddProduct(product:Product){
  products.push(product);

}

}

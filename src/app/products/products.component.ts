import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { Description, Product } from '../Services/products.data';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  products:Product[] = [];
  constructor (private logger:LoggerService,private productService : ProductService){
    this.products= this.productService.GetProductList();

  }
  filterText :string="";
  filterColumn:string="";
  
   idTest(prodId){
    alert(prodId);
 }

 AddProduct(){
   var product =new Product(15,"TestProd","GDN",new Date(1,10,2020),25.52,4,"",false,new Description("Test Description","test@gmail.com"));
    this.productService.AddProduct(product);
 }
 GetClass(product){
if(product.starRating >3){
  return "ratingMoreThan3 bolder"
}
else if(product.starRating <3)
return "ratingLessThan3"

 }
 childData:string ="";
 /*chiledDataRecieved(data:any){
      console.log("ChildData "+ data);
      this.childData=  data;
 }*/
 chiledDataRecieved(data:any){
    this.childData=  data;
    var logger =new LoggerService();
    this.logger.log(data);
}

 dateTimeNow :Date = new Date();
 //products:any[] = [];
  
  //tempProducts:any[] = [
   /* products:any[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": new Date(2016, 10, 25),
      "description": {
        "descText": "Leaf rake with 48-inch wooden handle.",
        "emailId": "test@test.com"
      },
      "price": 19.95,
      "starRating": 1,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": new Date(2017, 9, 20),
      "description": { "descText": "15 gallon capacity rolling garden cart",
       "emailId": "test@test.com" },
      "price": 32.99985,
      "starRating": 2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": new Date(2016, 10, 25),
      "description": { "descText": "Curved claw steel hammer", "emailId": "test@test.com" },
      "price": 8.9,
      "starRating": 3,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": new Date(2016, 10, 25),
      "description": { descText: "15-inch steel blade hand saw", "emailId": "test@test.com" },
      "price": 11.55787878,
      "starRating": 4,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": new Date(2016, 10, 25),
      "description": { descText: "Standard two-button video game controller", "emailId": "test@test.com" },
      "price": 35.957878,
      "starRating": 5,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];
  */


  ngOnInit() {
  }

}

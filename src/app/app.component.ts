import { Component } from '@angular/core';

@Component({
  //selector: 'app-root', //as custom html element
  //selector: '[app-root]', // as attibute
  selector: '.app-root' , // as class
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
 /* template: `<h1> Inline Template 1 </h1>
  <h1> Inline Template 2 </h1>`*/

   /*styles :[
     `h1{background-color: green;}
     h2{background-color: red;}`
   ],*/
})
export class AppComponent {
  title = 'Sept2020App';
}

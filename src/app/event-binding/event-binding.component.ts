import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: []
})
export class EventBindingComponent implements OnInit {

  message :string="Hello World!!";
  constructor() { }
   
  clickedButton(){
    //console.log("Button Clicked");
    let name= prompt("Enter Your Name");

    this.message = "Hello"+ name;
  }
 
  doubleClickedButton(){
    //console.log("Button Clicked");
    let name= prompt("Enter Your Name");

    this.message = "Hello"+ name;
  }

  inputText :string="";

  textChanges(data){

    //console.log(data.target.value);

    this.inputText = data.target.value;

  }
  
  ngOnInit() {
  }

}

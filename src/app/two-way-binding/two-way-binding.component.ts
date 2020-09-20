import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-twb',
  templateUrl: './two-way-binding.component.html',
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }
  

  OneWayMessage :string="";

  OneWayBinding(data){

   this.OneWayMessage = data.target.value;

  }
  
  OneWayFailTest(){

    this.OneWayMessage="one way test Fails.."
  }

  TwoWayMessage :string="";
  TwoWayFailTest (){
  this.TwoWayMessage="Two Way Test."
  }

  TwoWayMessage2 :string="";
  TwoWayFailTest2 (){
  this.TwoWayMessage2="Two Way Test2.";
  }

  TwoWayMessageCange(data:String){
    this.TwoWayMessage2=data.toUpperCase();
  }

  ngOnInit() {
  }

}

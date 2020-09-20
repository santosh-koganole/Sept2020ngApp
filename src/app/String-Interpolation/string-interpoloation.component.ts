import { Component } from "@angular/core";

@Component({
selector:"app-si",
templateUrl:"./string-interpoloation.component.html",

})

export class StringInterpolationComponent{

    num1=10;
    name1="Santosh";
    userFlag=true;

    num2 :number = 123;  // strongly typed
    name2 : string ="Masterpiece";
    userFlag2 :boolean = true;
    someValue :any =true;  // assign any string/num/boolean

    person: Person =new Person ();
 
    constructor (){
    // this.num1= "";
    this.someValue = 25;
    this.person.Age=30;
    this.person.Name = "Santosh";
    this.person.Address = new Address();
    this.person.Address.AddLine1="Bangalore-68";

    }

    GetFullName() : String {
        return "GetFullName";

    }

    }

    class Person{
        Name: string;
        Age: number;
        Address: Address;
    }

    class Address{
        AddLine1: string;

    }
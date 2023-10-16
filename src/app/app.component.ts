import { Component } from '@angular/core';
interface Student {
  firstName: string,
  lastName: string,
};
interface firstArray {
  firstNumber: Number,
};
interface secondArray {
  firstNumber: String,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstClass';
  public name: string = "Joshua"; //Only accept String as dataType
  public age : number = 900;  //Only accept Number as dataType
  public school: boolean = true; //Only accept Boolean as dataType
  public allSchools : (number|string|boolean) = "SQI"; //Can accept Strings, Number and Booleans as dataType
  public myAge : any = 65; //Can accept any dataType 
  public myArray2 : firstArray [] = [];
  public myArray : secondArray [] = [];
  public obj : {
    firstName: string;
    lastName: string;
  } = {
    firstName : "Joshua",
    lastName : "Smith",
  }; //Only accept Objects as dataType
  public myObj:Student = {
    firstName: "John",
    lastName: "Smith",
  }

  ngOnInit(){
    console.log(this.allSchools);
    
  }
}

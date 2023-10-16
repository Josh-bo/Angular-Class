import { Component } from '@angular/core';
interface contactInterface{
  FirstName : string,
  LastName : string;
  Email : string;
  Address : string;
  PhoneNumber: string
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public firstName = "";
  public lastName = "";
  public email = "";
  public address = "";
  public phoneNumber = "";
  public contactArray:contactInterface[]=[]
  
ngOnInit(){
  if(localStorage['contactData']){
    this.contactArray = JSON.parse(localStorage.getItem('contactData')!)

    console.log(this.contactArray);
    
  }
}
  addContact(){
    // console.log(this.firstName);
    let contactObject={
      FirstName : this.firstName,
      LastName : this.lastName,
      Email : this.email,
      Address : this.address,
      PhoneNumber : this.phoneNumber,

    };

    // console.log(contactObject)
    this.contactArray.push(contactObject)
    localStorage.setItem("contactData", JSON.stringify(this.contactArray))
    // console.log(this.contactArray);
  }
  
  deleteContact(index : number){
    // console.log(index);
    this.contactArray.splice(index, 1)
    localStorage.setItem("contactData", JSON.stringify(this.contactArray))
    
  }
}

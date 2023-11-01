import { Component } from '@angular/core';
import { Router } from '@angular/router';
  interface ContactInterface{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string, 
  }
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    constructor(public contactRoutes:Router){}

     public firstname = ""
     public lastname = ""
     public email = ""
     public phone = ""
     public address = ""
     public contactArray:ContactInterface[]= []
     ngOnInit(){
       if (localStorage['contactDetails']) {
        this.contactArray =JSON.parse(localStorage.getItem('contactDetails')!)
         
      }
    }
      contactBtn(){
        console.log(this.firstname);
        let contactObject = {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          phone: this.phone,
          address: this.address,
        }
        // console.log(contactObject);
        this.contactArray.push(contactObject)
        console.log(this.contactArray);
        localStorage.setItem("contactDetails",JSON.stringify(this.contactArray))
      
    }
    deleteContact(index:number){
      console.log(index);
      this.contactArray.splice(index,1)
      localStorage.setItem("contactDetails",JSON.stringify(this.contactArray))

     }
     editContact(){
      this.contactRoutes.navigate(['editContact'])
     }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface ContactInterface{
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string, 
}
@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent {
  constructor(public actRoute: ActivatedRoute){}
  public contactIndex:number = 0
  
  contactObject: ContactInterface = {
    firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  }
 ngOnInit(){
  let contactArray =JSON.parse(localStorage['contactDetails'])
  // console.log(contactArray);
  // console.log(this.actRoute.snapshot.params['id']);
  this.contactIndex = this.actRoute.snapshot.params['id']

 this.contactObject = contactArray[this.contactIndex]
 }
   
}

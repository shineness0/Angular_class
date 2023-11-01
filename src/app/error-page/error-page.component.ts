import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
interface ContactInterface{
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string, 
}
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
  public showArray:number[]=[]
  public showContact:ContactInterface[]=[]
    constructor(public contactService: ContactService){}
    ngOnInit(){
      console.log(this.contactService.getContactArray());
      console.log(this.contactService.getContactDetails());
      this.showArray = this.contactService.getContactArray()
      this.showContact = this.contactService.getContactDetails()
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public contactArray: number[]=[2,4,6,8,22,13,56,7]
  constructor() {
   }
   getContactArray(){
    return this.contactArray
  }
  getContactDetails(){
     return JSON.parse(localStorage['contactDetails'])
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  names:string [] = ['Oyin', 'Daniel', 'Ayo','Olu', 'Dara']
  greeting:string = 'How are you doing'
  numbers:number[] = [1,2,3,4,5,6,7,8,9]

  private apiUrl:string = 'https://api.github.com/users'

  constructor(public http:HttpClient) { }

  getNames() {
    return this.names;
  }

  greet() {
    return this.greeting;
  }

  getNumbers() {
    return this.numbers;
  }

  getUsers() { 
   return this.http.get(this.apiUrl)
  }
}

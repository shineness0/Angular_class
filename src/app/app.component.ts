import { Component } from '@angular/core';
interface StudentsDatetypes{
  firstName: string,
  lastName: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-class';
  public name:string="Hello";
  public age:number=100;
  public school:boolean=true;
  public myarray:number[]=[78];
  public myarray2:string[]=["Hello"]
  public allschools:(string|number|boolean)= 100;
  public students:StudentsDatetypes={
    firstName: "Olamide",
    lastName: "Olamide"

  };
  // public myage: any = "I'm older than you";
  
  public arrayOfobj:StudentsDatetypes[]=[
    {
      firstName: "Olamide",
      lastName: "lLao"
    },
    {
      firstName: "Ola",
      lastName: "Mi"
  }
  
]


}

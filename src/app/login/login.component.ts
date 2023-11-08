import { Component } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public testService:TestService){}

  public numbers:number[] = []

  ngOnInit() {
    this.numbers = this.testService.getNumbers()
   }
}

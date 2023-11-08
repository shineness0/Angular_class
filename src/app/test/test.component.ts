import { Component } from '@angular/core';
import {TestService} from '../services/test.service'


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(public testService:TestService) {}

  public greeting:string = ''
  public names:string[] = []
  public numbers:number[] = []
  public users:any = []

  ngOnInit() {
    this.names = this.testService.getNames()
    this.greeting = this.testService.greet()
    this.numbers = this.testService.getNumbers()
    this.testService.getUsers().subscribe(users => 
        this.users = users  
  )}

}

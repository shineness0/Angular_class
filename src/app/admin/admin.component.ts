import { Component } from '@angular/core';
import { ArrayService } from '../services/array.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public namesArray: string[] = []
  constructor(public getName: ArrayService){}
  ngOnInit(){
    console.log(this.getName.getNames());
    this.namesArray = this.getName.getNames()
  }
}

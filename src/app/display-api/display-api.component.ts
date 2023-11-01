import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-display-api',
  templateUrl: './display-api.component.html',
  styleUrls: ['./display-api.component.css']
})
export class DisplayApiComponent {
  apiArray: any = []
  constructor(public apiService: ApiService){}
   getApiBtn(){
    this.apiService.getApiArray().subscribe(response =>{
      console.log(response);
      this.apiArray = response
    })
    
     
   }
}

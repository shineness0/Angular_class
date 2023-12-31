import { Component } from '@angular/core';
import { StateService } from '../services/state.service';
interface FoodInterface {
  name: string,
  price: number,
  quantity: number,
  category: string
  availability: string
}
@Component({
  selector: 'app-state2',
  templateUrl: './state2.component.html',
  styleUrls: ['./state2.component.css']
})
export class State2Component {
  public foodArray: FoodInterface = {
    name: '',
    price: 0,
    quantity: 0,
    category: '',
    availability: ''
  }
  constructor(public itemService: StateService) { }

   

}

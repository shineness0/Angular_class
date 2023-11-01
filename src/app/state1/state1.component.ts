import { Component } from '@angular/core';
import { StateService } from '../services/state.service';
interface   FoodInterface{
  name: string,
  price: number,
  quantity: number,
  category: string
  availability: string
}
@Component({
  selector: 'app-state1',
  templateUrl: './state1.component.html',
  styleUrls: ['./state1.component.css']
})
export class State1Component {
  constructor(public itemService: StateService){}
   public foodItems:FoodInterface[]= [
    {
     name: 'rice',
     price: 10000,
     quantity: 3,
     category: 'Foodstuff',
     availability: 'available',
    },
    {
     name: 'Yam',
     price: 18500,
     quantity: 15,
     category: 'Foodstuff',
     availability: 'not-available',
    },
    {
     name: 'Beans',
     price: 15000,
     quantity: 6,
     category: 'Foodstuff',
     availability: 'available',
    },
    {
     name: 'Mango',
     price: 3000,
     quantity: 30,
     category: 'Fruit',
     availability: 'not-available',
    },
   ]  
   sendItem(item:FoodInterface){
    // console.log(item);
    this.itemService.subBehaviour.next(item)
    this.itemService.subBehaviour.subscribe(res=>{
      console.log(res);
      
    })
    
   }

  ngOnInit(){
    console.log(this.itemService.subBehaviour);
    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
   public date = new Date();
   public name = 'Olamide'
   public condition = 'Red'
   public color1 = 'Red'
   public color2 = 'Yellow'
   changeBtn(){
    this.condition=this.color1?this.color2:this.color1
   }
}

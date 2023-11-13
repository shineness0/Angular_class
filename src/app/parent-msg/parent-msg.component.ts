import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-msg',
  templateUrl: './parent-msg.component.html',
  styleUrls: ['./parent-msg.component.css']
})
export class ParentMsgComponent {
  parentMsg: string = '';
  childMsg: string = ''


  sendMsg() {
    console.log(this.parentMsg);
  }

  receiveMsg(res: string) {
    this.childMsg = res;
    console.log(this.childMsg)
   }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-msg',
  templateUrl: './child-msg.component.html',
  styleUrls: ['./child-msg.component.css']
})
export class ChildMsgComponent {
  @Input() parentMsg = ''
  @Output() childMsgEmitter = new EventEmitter()

  msg: string = '';
  childMsg: string = '';

  sendMsg() {
    this.childMsgEmitter.emit(this.msg)
  }

}

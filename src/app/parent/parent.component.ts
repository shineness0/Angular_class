import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  post = ''
  comment = ''

  ngOnInit() {
    console.log(this.post)
  }

  onInputChange(event: any) {
    this.post = event.target.value

    // console.log(this.post)
   }

   recieveComment(event: any) {
    this.comment = event
   }

}

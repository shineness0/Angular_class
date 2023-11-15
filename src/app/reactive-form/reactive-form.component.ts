import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  constructor(public formBuilder: FormBuilder){}

  public forms = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: ['', Validators.required],
    password: ['', Validators.required],
  })
  
    firstName = ''
    lastName = ''
    email = ''
    age = ''
    password =''

    behaviorSubject = new BehaviorSubject<{}>(this.forms);

  

  onSubmit() {
    console.log(this.forms.value)

    this.forms.controls['email'].setValue('')
    this.forms.controls['age'].setValue('')
  }

  sendUser() {
    
  }

}

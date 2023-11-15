import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  constructor(public formBuilder: FormBuilder){}

  public forms = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    age: [''],
    password: [''],
  })

  
  
    firstName = ''
    lastName = ''
    email = ''
    age = ''
    password =''
  

  onSubmit() {
    console.log(this.forms.value)

    this.forms.controls['email'].setValue('')
    this.forms.controls['age'].setValue('')
  }

}

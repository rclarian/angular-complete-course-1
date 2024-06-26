import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-form';

  firstName: string = '';
  lastName: string = '';
  userEmail: string = '';

  @ViewChild('registrationForm') form: NgForm;

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'}
  ]

  defaultGender: string = 'male';
  defaultCountry: string = 'Philippines';

  OnFormSubmitted(){
    console.log(this.form);
    console.log(this.form.controls['firstname'].value);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.address.country);
    console.log(this.form.value.address.city);
  }
}

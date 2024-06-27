import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-reactive-form';

  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      country: new FormControl('Philippines'),
      street: new FormControl(null),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null)
    })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm);
  }





}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
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
    console.log(this.reactiveForm.controls['firstname'].invalid);
    //if(this.reactiveForm.value)

    //this.reactiveForm.controls['firstname'].invalid;

    
  }





}

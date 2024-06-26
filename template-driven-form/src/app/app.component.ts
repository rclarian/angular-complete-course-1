import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('registrationForm') form: NgForm;

  OnFormSubmitted(){
    console.log(this.form);
  }
}

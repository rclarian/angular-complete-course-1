import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './Validators/noSpaceAllowed.validator'

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
      firstname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      lastname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required, CustomValidators.checkUserName),
      dob: new FormControl(null),
      gender: new FormControl('male'),

      address: new FormGroup({
        country: new FormControl('Philippines'),
        street: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ]),
      experience: new FormArray([
        
      ])
    })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm);
    
  }

  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills'))
    .push(new FormControl(null, Validators.required))
  }

  DeleteSkill(index: number){
    const frmArray = <FormArray>this.reactiveForm.get('skills');
    frmArray.removeAt(index);
  }

  AddExperience(){
    const frmgroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(frmgroup);
  }

  DeleteExperience(index: number){
    const frmArray = <FormArray>this.reactiveForm.get('experience');
    frmArray.removeAt(index);
  }

}

import { Component, OnInit } from '@angular/core';

import {AbstractControl, FormArray,  Validators,   FormGroup,    FormBuilder} from '@angular/forms';

import { NoWillValidator } from '../shared/no-will-validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': ['Will', [Validators.required, Validators.minLength(3)]],
      'group1': this.fb.array([
        this.fb.control('Will1', Validators.required),
        this.fb.control('Will2', Validators.required),
        this.fb.control('Will3', Validators.required),
        this.fb.control('Will4', Validators.required)
      ])
    });
  }

  getFieldInvalid(fieldName, prefix="") {
    return this.form.get(prefix+fieldName).invalid;
  }

  ngOnInit() {
    this.form.addControl('email', this.fb.control('default@example.com'));

    let group1: FormArray = <FormArray>this.form.controls['group1'];
    group1.insert(group1.length, this.fb.control('Will 5',
      [NoWillValidator, Validators.minLength(2)]));
  }

  // NoWillValidator(c: AbstractControl) {
  //   if(c.value == 'Will') {
  //     return {
  //       NoWill: true
  //     };
  //   }
  //   else {
  //     return null;
  //   }
  // }
}

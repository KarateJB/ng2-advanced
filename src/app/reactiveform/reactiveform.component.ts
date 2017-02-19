import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: 'This is title',
      'name': this.fb.group({
        firstName: ['JB', Validators.required],
        lastName: 'Lin'
      })
    });
  }

  getFieldInvalid(fieldName) {
    // return this.form.controls[fieldName].invalid;
    let nameGroup: FormGroup  = <FormGroup>this.form.controls["name"];
    return nameGroup.controls[fieldName].invalid;

  }

  ngOnInit() {
  }

}

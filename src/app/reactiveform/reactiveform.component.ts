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
      'name': ['JB', Validators.required]
    });
  }

  getFieldInvalid(fieldName) {
    return this.form.controls[fieldName].invalid;
  }

  ngOnInit() {
  }

}

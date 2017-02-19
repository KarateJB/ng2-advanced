import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { validator  } from '../shared/validator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveFormComponent implements OnInit {

  private form: FormGroup;
  private dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      title: 'This is title',
      'name': this.fb.group({
        firstName: ['JB', Validators.required],
        lastName: 'Lin'
      })
    });


    //Bind form model with FormBuilder
    this.dynamicForm = this.fb.group({
      title: 'This is title',
      'name': this.fb.array([
        this.fb.control('JB1', Validators.required),
        this.fb.control('JB2', Validators.required),
        this.fb.control('JB3', Validators.required)
      ])
    });

    //Bind form model from data model
    let data = {
      'title': 'This is title',
      'name': ['JB1', 'JB2', 'JB3']
    };
    this.dynamicForm.setValue(data);


  }

  private getFieldInvalid(fieldName) {
    // return this.form.controls[fieldName].invalid;
    let nameGroup: FormGroup = <FormGroup>this.form.controls["name"];
    return nameGroup.controls[fieldName].invalid;

  }

  private getDynamicFieldInvalid(fieldName, prefix=""){
    console.log(prefix+fieldName);
    return this.dynamicForm.get(prefix+fieldName).invalid;
  }

  ngOnInit() {
    let groupAry: FormArray = <FormArray>this.dynamicForm.controls["name"];
    groupAry.insert(groupAry.length, this.fb.control('JB4', validator));

  }

}

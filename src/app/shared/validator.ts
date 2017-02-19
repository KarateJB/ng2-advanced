import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';

export function validator(ctrl: AbstractControl) {
    if (ctrl.value == "JB") {
      return { 'NoJB': true }
    }
    else {
      return null;
    }

  }

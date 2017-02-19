import { AbstractControl } from '@angular/forms';

export function NoWillValidator(c: AbstractControl) {
    if(c.value == 'Will') {
      return {
        NoWill: true
      };
    }
    else {
      return null;
    }
  }

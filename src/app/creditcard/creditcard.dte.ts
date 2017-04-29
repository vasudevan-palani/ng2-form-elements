import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS,FormControl } from '@angular/forms';


export function validateCreditCard() {
  return (c: FormControl) => {
    let CC_REGEXP = /^[1-9][0-9]+$/i;

    return CC_REGEXP.test(c.value) ? null : {
      validateCC: {
        valid: false
      }
    };
  };
}

export class CreditCardValidator implements Validator {
    validator: Function;

    constructor() {
      this.validator = validateCreditCard();
    }

    validate(c: FormControl) {
      return this.validator(c);
    }
}

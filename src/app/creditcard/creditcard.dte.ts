import { Validator, AbstractControl, NG_VALIDATORS,ValidatorFn } from '@angular/forms';
import { Directive, forwardRef, Attribute } from '@angular/core';

function validateCreditCard() {
  return (c: AbstractControl) => {
    let CC_REGEXP = /^[1-9][1-9]\d+$/;
    console.log("here");
    return CC_REGEXP.test(c.value) ? null : {
      validateCC: {
        valid: false
      }
    };
  };
}
@Directive({
    selector: '[creditCardValidator][formControlName],[creditCardValidator][formControl],[creditCardValidator][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => CreditCardValidator), multi: true }
    ]
})
export class CreditCardValidator implements Validator {

    validator: ValidatorFn;

    constructor() {
      this.validator = validateCreditCard();
    }

    validate(c: AbstractControl) {
      return this.validator(c);
    }
}

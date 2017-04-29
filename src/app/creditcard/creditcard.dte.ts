import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validate-cc]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => CreditCardValidator), multi: true }
    ]
})
export class CreditCardValidator implements Validator {
    constructor( @Attribute('validateCc') public validateCc: string) {
    }

    validate(c: AbstractControl): { [key: string]: any } {
      let err = {
        ccError: {
          given: c.value,
          message: 'Invalid credit card number'
        }
      };

      console.log("alled");

      let cond = new RegExp('^[1-9][0-9]+$');

      return cond.test(c.value)?null:err;
    }
}

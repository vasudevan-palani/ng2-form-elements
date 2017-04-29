import { Component, EventEmitter, Input, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';

export function createValidateCreditCard() {

  return function validatecc(c: FormControl) {
    let err = {
      ccError: {
        given: c.value,
        message: 'Invalid credit card number'
      }
    };

    let cond = new RegExp('^[1-9][0-9]+$');

    console.log(c.value);

    return cond.test(c.value)?null:err;
  }

}

@Component({
  selector: 'credit-card',
  templateUrl: 'creditcard.cpt.html',
  styleUrls: ['creditcard.cpt.css'],
  inputs: ['name', 'id', 'title', 'placeholder', 'label'],
  outputs: ['invalid', 'valid'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreditCardComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CreditCardComponent),
      multi: true
    }
  ]
})
export class CreditCardComponent implements ControlValueAccessor, OnChanges {

  invalid: EventEmitter<string>;
  valid: EventEmitter<string>;

  private ccnumber: string;

  validateFn: Function;

  propagateChange = (_: any) => { };

  constructor() {
    this.invalid = new EventEmitter();
    this.valid = new EventEmitter();
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.ccnumber = value;
      this.propagateChange(this.ccnumber);
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  ngOnChanges(changes) {
    this.validateFn = createValidateCreditCard();
  }

  private _change(event) {
    this.ccnumber = event.target.value;
    this.propagateChange(this.ccnumber);
  }

  validate(c: FormControl) {
    console.log("validate called");
    return this.validateFn(c);
  }


}

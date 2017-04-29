import { Component, EventEmitter, Input, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';

function createValidateCreditCard() {

  return function validatecc(c: FormControl) {
    let err = {
      ccError: {
        given: c.value,
        message: 'Invalid credit card number'
      }
    };

    let cond = new RegExp('^[1-9][0-9]+$');

    return cond.test(c.value)?null:err;
  }

}

@Component({
  selector: 'credit-card',
  templateUrl: 'creditcard.cpt.html',
  styleUrls: ['creditcard.cpt.css'],
  inputs: ['name', 'id', 'title', 'placeholder', 'label','form','formControlName'],
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

  @Input()
  public form;

  private ccnumber: string;

  validateFn: Function;

  propagateChange = (_: any) => { };
  propagateTouch = (_: any) => { };

  constructor() {
    this.invalid = new EventEmitter();
    this.valid = new EventEmitter();
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.ccnumber = value;
      this.propagateChange(this.ccnumber);
      this.propagateTouch(this.ccnumber);
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouch = fn;
  }

  ngOnChanges(changes) {
    this.validateFn = createValidateCreditCard();
  }

  private _change(event) {
    this.ccnumber = event.target.value;
    this.propagateChange(this.ccnumber);
    this.propagateTouch(this.ccnumber);

  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }


}

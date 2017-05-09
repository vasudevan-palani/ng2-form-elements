import { Component, EventEmitter, Input, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'credit-card',
  templateUrl: 'creditcard.cpt.html',
  styleUrls: ['creditcard.cpt.css'],
  inputs: ['name', 'id', 'title', 'placeholder'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreditCardComponent),
      multi: true
    }
  ]
})
export class CreditCardComponent implements ControlValueAccessor {

  @Input()
  public form;

  private ccnumber: string;

  propagateChange = (_: any) => { };
  propagateTouch = (_: any) => { };

  constructor() {

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

  private _change(event) {
    this.ccnumber = event.target.value;
    this.propagateChange(this.ccnumber);
    this.propagateTouch(this.ccnumber);

  }

}

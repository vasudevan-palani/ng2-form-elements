import { Directive, forwardRef, Attribute } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[reset-on-empty]',
    host :{
      '(keyup)':'_onKeyup()'
    }
})
export class ResetOnEmptyDirective {
    constructor( public control: NgControl) {
    }

    _onKeyup(){
      if(this.control.value == undefined || this.control.value == ""){
        this.control.reset();
        this.control.control.markAsPristine();
      }
    }
}

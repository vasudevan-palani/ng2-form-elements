import { Directive, forwardRef, Attribute } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[reset-on-empty]',
    exportAs:'resetOnEmpty',
    host :{
      '(keyup)':'_onKeyup()'
    }
})
export class ResetOnEmptyDirective {
    constructor( public control: NgControl) {
    }

    _onKeyup(){
      console.log("here");
      if(this.control.value == undefined || this.control.value == ""){
        console.log("calling reset");
        this.control.reset();
      }
    }
}

import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CreditCardValidator } from './creditcard/creditcard.dte';

@Component({
  selector: 'app-root',
  templateUrl: './app.cpt.html',
  styleUrls: ['./app.cpt.css']
})
export class AppComponent {
  title = 'app works!';


  ccform : FormGroup;

  constructor(private fb:FormBuilder){
    this.ccform = this.fb.group({
      ccnumber : ['',CreditCardValidator]
    });
  }

  reset(){
    this.ccform.reset();
    this.ccform.markAsPristine();
  }

  validAndDirty(form,control){
    if(form.controls[control]){
      if(form.controls[control].valid && form.controls[control].dirty){
        return true;
      }
    }
    return false;
  }

  invalidAndDirty(form,control){
    if(form.controls[control]){
      if(!form.controls[control].valid && form.controls[control].dirty){
        return true;
      }
    }
    return false;
  }
}

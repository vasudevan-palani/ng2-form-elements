import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
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
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.cpt';
import { CreditCardComponent } from './creditcard/creditcard.cpt';
import { CreditCardValidator } from './creditcard/creditcard.dte';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    CreditCardValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

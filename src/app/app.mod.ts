import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.cpt';
import { ResetOnEmptyDirective } from './shared/resetonempty.dte';
import { CreditCardComponent } from './creditcard/creditcard.cpt';

@NgModule({
  declarations: [
    AppComponent,
    ResetOnEmptyDirective,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

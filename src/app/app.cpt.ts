import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.cpt.html',
  styleUrls: ['./app.cpt.css']
})
export class AppComponent {
  title = 'app works!';
  model = {name:"Vasu"};

  testInput = {'name':'Vasu'};

  get diagnostic() { return JSON.stringify(this.model); }

  logVal(value){
    console.log("log : ",value);
  }

  ccBlur(c):void{
    if(c.value == undefined || c.value == ""){
      c.reset();
    }
    console.log(c.touched);
  }
}

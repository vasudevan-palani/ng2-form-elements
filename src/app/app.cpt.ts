import { Component } from '@angular/core';

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
}

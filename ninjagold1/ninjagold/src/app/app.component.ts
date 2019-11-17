import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninjagold';
  activities = [];
  total_gold = 0;

  constructor(private _httpService: HttpService){}

  submitform(str: any): void { 
    const actions ={
      'FARM':[2,4],
      'CAVE':[5,6],
      'HOUSE':[7,9],
      'CASINO':[-100,200]
    }
    console.log(Math.floor(Math.random()*actions[str][1]-1+actions[str][0]))
    var gold = Math.floor(Math.random()*actions[str][1]-1+actions[str][0])
    this.total_gold+=gold
    var act =`You went to the ${str} and spend ${gold}`
    this.activities.push(act)
    console.log(this.activities)
}

  makebob(bobsname: any): void{

  }

  getBobs(){
    let tempObservable = this._httpService.getBobs();
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    
  }


}

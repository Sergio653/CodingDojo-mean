import { Component,OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes = [];
  cake: any;
  Editcake: any;
  newCake: any;
  showCake: Boolean;
  avg: Number;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakesfromService();
    this.newCake = {baker:"",img:""}
    this.Editcake = {rating:"",review:""}
  }
  getCakesfromService(){
    let obv = this._httpService.getCakes()
    obv.subscribe(data => {
      this.cakes = data['data'];
    })
  }
  getOneCakefromService(id){
    let obv = this._httpService.getOneCake(id)
    obv.subscribe(data => {
      console.log("found cake",data)
      this.cake = data['data'];
      var leng = this.cake[0].rating
      var sum = 0
      for(var i = 0; i < leng.length; i++){
        sum+=leng[i]
      }
      this.avg = sum/leng.length
      this.showCake = true;
    })
  }
  onSubmit(){
    let obv = this._httpService.addCake(this.newCake)
    obv.subscribe(data => {
      console.log("added cake",data)
      this.newCake = {baker:"",img:""}
    })
  }

  onUpdate(id){
    console.log(id,this.cake,this.Editcake)
    let obv = this._httpService.updateCake(id,this.Editcake)
    obv.subscribe(data => {
      console.log("Updated Cake",data)
 
    })
  }
}

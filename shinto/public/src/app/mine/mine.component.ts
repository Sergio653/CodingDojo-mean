import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  data: any;
  question: String;
  answer: String;
  guess: any;
  result: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }
    
  ngOnInit() {
    this.getinfo();
  }
  getinfo(){
    let obv = this._httpService.getTriva()
    obv.subscribe(data => {
      console.log(data)
      this.data = data;
      this.question = data[0].question;
      this.answer = data[0].answer;
    })
  }
  onSubmit(){
    if(this.answer == this.guess){
      console.log("correct!!")
      this._httpService.mineCoins();
      this.result = `Correct, you generated 1 ShintoCoin!`
    }
    else{
      this.result = 'Wrong answer. Please try again'
    }
  }
}

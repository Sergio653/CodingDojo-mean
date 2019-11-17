import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  bank: {};
  buy: Number;
  result: String;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.getBank()
  }
  getBank(){
    this.bank = this._httpService.bankInfo() 
  }
  onSubmit(){
    if(this.buy > 0){
      this._httpService.buyCoins(this.buy)
      this.result = `You bought ${this.buy} ShintoCoin(s)`
    }
  }
}

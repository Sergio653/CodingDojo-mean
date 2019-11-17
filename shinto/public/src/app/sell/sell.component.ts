import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  bank: {};
  sell: Number;
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
    if(this.bank['coins'] > 0 && this.bank['coins']>=this.sell){
      this._httpService.sellCoins(this.sell)
      this.result = `You sold ${this.sell} ShintoCoin(s)`
    }
    else{
      this.result = "Error. Unable to process transaction."
    }
  }
}

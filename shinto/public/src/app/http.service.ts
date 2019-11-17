import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  bank = {
    value: 1,
    coins: 0
  };
  transactions = []

  constructor(private _http: HttpClient) { }

  getTriva(){
    return this._http.get("http://jservice.io/api/random")
  }
  bankInfo(){
    return this.bank
  }
  getTransInfo(){
    return this.transactions
  }
  getOneTransaction(id){
    return this.transactions.find(element => element.transaction_id == id)
  }
  coinTransction(act,qty){
    let trans_id = Math.floor(Math.random() * (9999 - 1 + 1) ) + 1
    this.transactions.push({
      transaction_id: trans_id,
      action: act ,
      amount: qty,
      value: this.bank.value
    })
  }
  mineCoins(){
    this.bank.coins += 1;
    this.bank.value +=1;
    this.coinTransction('mined',1)
  }

  buyCoins(qty){
    this.bank.coins += qty;
    this.bank.value += qty;
    this.coinTransction("bought",qty)
  }

  sellCoins(qty){
    this.bank.coins -= qty;
    this.bank.value -= qty;
    this.coinTransction("sold",qty)
  }
}

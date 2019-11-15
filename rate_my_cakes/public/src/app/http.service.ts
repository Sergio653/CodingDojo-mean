import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get('/cakes')
  }
  getOneCake(id){
    return this._http.get(`/cakes/${id}`)
  }
  addCake(newCake){
    return this._http.post('/cakes',newCake)
  }
  updateCake(id,updateCake){
    console.log("**************************************8")
    console.log(id,updateCake)
    return this._http.put(`/cakes/${id}`,updateCake)
  }
}

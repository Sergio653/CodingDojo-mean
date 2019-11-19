import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    console.log("******")
    this.getProductsFromService()
  }
  getProductsFromService(){
    let obv = this._httpService.getProducts()
    obv.subscribe(data =>{
      console.log("**************")
      console.log(data['products'])
      this.products = data['products']
    })
  }
  onDelete(id){
    console.log(id)
    let obv = this._httpService.destroyProduct(id)
    obv.subscribe(data => {
      console.log("Destroyed Product", data)
      this.getProductsFromService()
    })
  }
}

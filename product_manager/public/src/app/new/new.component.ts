import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct = {};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newProduct = {title: "",price: Number, imgurl: ""}
  }
  onSubmit(){
    console.log("hi master")
    let obv = this._httpService.createProduct(this.newProduct)
    obv.subscribe(data => {
      console.log(data)
      this._router.navigateByUrl('/products');
    })
  }
}

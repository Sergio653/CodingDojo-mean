import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product = {};
  errors: any;
  success: String;
  @Output('activate') activate = new EventEmitter();
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
    
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getOneProductFromService(params['id'])
  });
  }
  triggerEvent(){
  console.log("Event Tigger.....waiting")
 this.activate.emit(7); //we can pass in any data type
}
  getOneProductFromService(id){
    let obv = this._httpService.getOneProduct(id)
    obv.subscribe( data => {
      console.log(data)
      this.product = data['product']
    })
  }
  onUpdate(id){
    console.log("hi SupremeOverlord")
    let obv =  this._httpService.updateProduct(id,this.product)
    obv.subscribe(data => {
      console.log(data)
      this._httpService.getProducts().subscribe((data)=>{
        console.log("Got Products",data['products'])
      })
      if(data['err']){
        this.errors = data['err']
      }
      else {
        console.log("Updated Product",data)
        this.success = "Successfully updated author"
        this._router.navigate(['/products'])
        
      }

    })
  }
}

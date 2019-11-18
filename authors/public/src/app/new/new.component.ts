import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }
  onSubmit(){
    let obv = this._httpService.addAuthor(this.newAuthor)
    obv.subscribe(data => {
      console.log(data);
      if(data['err']){
        this._router.navigateByUrl('/pagenotfound')
      }
      else{
        this._router.navigateByUrl('/all')
      }
    })
  }
}

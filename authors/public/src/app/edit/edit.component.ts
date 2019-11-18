import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor: any;
  id: any;
  author = {};
  errors: any;
  success: String;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.editAuthor = {name:""}
    this.getOneAuthor()
  }
  getOneAuthor(){
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
      let obv = this._httpService.findOne(this.id);
      obv.subscribe( data => {
        console.log(data)
        if(data['author']==null){
          console.log("********************")
          console.log(data['err'])
          this._router.navigateByUrl('/pagenotfound')
        }
        else{
          this.author = data['author']
        }
      })
  });
  }
  onUpdate(id){
    let obv = this._httpService.updateAuthor(id,this.editAuthor)
    obv.subscribe(data => {
      console.log("Updated Author",data);
      if(data['err']){
        this.errors = data['err']
      }
      else {
        this.success = "Successfully updated author"
        this._router.navigateByUrl('/all')
      }
    })
  }
}

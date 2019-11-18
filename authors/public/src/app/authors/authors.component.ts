import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.getAuthorFromService()
  }
  getAuthorFromService(){
    let obv = this._httpService.getAuthors()
    obv.subscribe(data => {
      console.log(data);
      this.authors = data['authors'].sort((a,b)=> a.name.localeCompare(b.name))
    })
  }
  onDelete(id){
    let obv = this._httpService.destroyAuthor(id)
    obv.subscribe(data => {
      console.log("author is deleted",data)
      if(data['err']){
        this._router.navigateByUrl('/pagenotfound')
      }
      else{
        this.getAuthorFromService()
      }
    })
  }
}

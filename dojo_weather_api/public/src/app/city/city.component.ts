import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: String;
  data = {};
  imgurls = {
    Seattle: "https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    Dallas: "https://images.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    Burbank: "https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    'District of Columbia': "https://images.pexels.com/photos/2446915/pexels-photo-2446915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    Chicago: "https://images.pexels.com/photos/1058759/pexels-photo-1058759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    'San jose': "https://images.pexels.com/photos/612949/pexels-photo-612949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  };
  url: String;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['city']);
      this.city = params['city'];
      this.getWether()
  });
  }
  getWether(){
    let obv = this._httpService.getInfo(this.city);
    obv.subscribe(data => {
      // console.log("weather temp is", data['main']['temp']);
      this.data = data;
      
      this.url = this.imgurls[`${this.city}`]
      console.log(this.url)
    })
}
}
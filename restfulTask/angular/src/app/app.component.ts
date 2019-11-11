import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Maintitle = 'restfulTask';
  tasks =[];
  OneTask =[];
  
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService()
    this.getOneTask()
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("success",data);
      this.tasks = data['data'];
    })
  }

  getOneTask( ){
    let obv = this._httpService.getTaskbyID()
    obv.subscribe(data => {
      console.log('success',data);
      this.OneTask = data['data']
      console.log(data['data'])
    })
  }
}

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
  show_tasks: Boolean
  showOne: Boolean
  
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService()

  }
  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("success",data);
      this.tasks = data['data'];
    })
  }
  onButtonClick(){
    this.show_tasks = true;
  }
  clickOne(event: any){
    this.showOne = true;
    console.log(event['target']['value']);
    this.getOneTask(event['target']['value'])
    
  }
  getOneTask(id:String ){
    let obv = this._httpService.getTaskbyID(id)
    obv.subscribe(data => {
      console.log('success',data);
      this.OneTask = data['data']
      console.log(data['data'])
    })
  }
}

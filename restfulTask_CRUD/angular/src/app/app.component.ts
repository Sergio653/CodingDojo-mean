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
  showEdit: Boolean;
  newTask: any;
  
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = { title: "", desc: ""}
    this.getTasksFromService()

  }
  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      // console.log("success",data);
      this.tasks = data['data'];
    })
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe( data => {
      console.log("Got data from post...",data);
      this.newTask = {title: "",desc: ""}
    })
  }
  onUpdate(id){
    let observable = this._httpService.updateTask(id,this.OneTask[0]);
    observable.subscribe( data => {
      console.log("Got data from post...",data);
      this.newTask = {title: "",desc: ""}
    })
  }
  onDelete(id){
    let observable = this._httpService.destroyTask(id,this.OneTask[0]);
    observable.subscribe( data => {
      console.log("Got data from post...",data);
      this.newTask = {title: "",desc: ""}
    })
  }
  clickOne(event: any){
    this.showEdit = true;
    // console.log(event['target']);
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

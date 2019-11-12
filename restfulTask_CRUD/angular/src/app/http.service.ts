import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getTask();
    // this.getTaskbyID("5dc77e620f8b1a44c09bc33f")

  }

  getTasks(){
        // // our http response is an Observable, store it in a variable
        // let tempObservable = this._http.get('/tasks');
        // // subscribe to the Observable and provide the code we would like to do with our data from the response
        //   tempObservable.subscribe(data => console.log("Got our tasks!", data));

    return this._http.get('/tasks')
  }
  getTaskbyID(id: String){
    // let tempIDObservable = this._http.get('/tasks/'+id);
    // tempIDObservable.subscribe(data => console.log("Got the ID",data))
    return this._http.get(`/tasks/${id}`)
  }
  addTask(newtask){
    return this._http.post('/tasks',newtask)
  }
  updateTask(id,editTask){
    return this._http.put(`/tasks/${id}`,editTask)
  }
  destroyTask(id,destroyTask){
    return this._http.delete(`/tasks/${id}`,destroyTask)
  }
}

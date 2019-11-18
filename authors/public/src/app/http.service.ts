import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addAuthor(newAuthor){
    return this._http.post('/authors',newAuthor)
  }
  getAuthors(){
    return this._http.get('/authors')
  }
  findOne(id){
    return this._http.get(`/authors/${id}`)
  }
  updateAuthor(id,updatedAuthor){
    return this._http.put(`/authors/${id}`,updatedAuthor)
  }
  destroyAuthor(id){
    return this._http.delete(`/authors/${id}`)
  }
}

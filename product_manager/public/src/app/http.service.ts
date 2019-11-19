import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createProduct(newProduct){
    return this._http.post('/products',newProduct)
  }
  getProducts(){
    return this._http.get('/products')
  }
  getOneProduct(id){
    return this._http.get(`/products/${id}`)
  }
  updateProduct(id,editProduct){
    return this._http.put(`/products/edit/${id}`,editProduct)
  }
  destroyProduct(id){
    return this._http.delete(`/products/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY)
  }
  getProductsByCategory(id: number) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS_BY_CATEGORY + id)
  }
  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT)
  }

  saveProduct(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.Create_Product, obj)
  }
  updateProduct(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.Update_Product, obj)
  }
  deleteProduct(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.Delete_Product + id)
  }
}

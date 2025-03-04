import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Product } from '../types/product';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)
  constructor() { }

  getProducts() {
    return this.http.get<Product[]>(environment.api + "/product")
  }

  getProductById(id: string) {
    return this.http.get<Product>(environment.api + "/product/" + id)
  }

  addProduct(data: Product) {
    return this.http.post(environment.api + "/product/add", data)
  }

  updateProduct(id: string, data: Product) {
    return this.http.put(environment.api + "/product/" + id, data)
  }

  deleteProduct(id: string) {
    return this.http.delete(environment.api + "/product/" + id)
  }
}

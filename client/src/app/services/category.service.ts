import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Category } from '../types/category';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  http = inject(HttpClient);
  constructor() { }

  getCategories() {
    return this.http.get<Category[]>(environment.api + "/category")
  }

  getCategoryById(id: string) {
    return this.http.get<Category>(environment.api + "/category/" + id);
  }

  addCategories(name: string) {
    return this.http.post(environment.api + "/category/add", {
      name: name
    })
  }

  updateCategory(id: string, name: string) {
    return this.http.put(environment.api + "/category/" + id, {
      name: name
    })
  }

  deleteCategory(id: string) {
    return this.http.delete(environment.api + "/category/" + id)
  }
}

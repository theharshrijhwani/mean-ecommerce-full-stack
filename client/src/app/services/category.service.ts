import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  http = inject(HttpClient);
  constructor() { }

  getCategories() {
    return this.http.get("http://127.0.0.1:8080/category")
  }

  getCategoryById(id: string) {
    return this.http.get("http://127.0.0.1:8080/category/" + id);
  }

  addCategories(name: string) {
    return this.http.post("http://127.0.0.1:8080/category/add", {
      name: name
    })
  }

  updateCategory(id: string, name: string) {
    return this.http.put("http://127.0.0.1:8080/category/" + id, {
      name: name
    })
  }

  deleteCategory(id: string) {
    return this.http.delete("http://127.0.0.1:8080/category/" + id)
  }
}

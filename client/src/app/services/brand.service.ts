import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Brand } from '../types/brand';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  http = inject(HttpClient);
  constructor() { }

  getBrands() {
    return this.http.get<Brand[]>(environment.api + "/brand");
  }

  getBrandById(id: string) {
    return this.http.get<Brand>(environment.api + "/brand/" + id);
  }

  addBrand(name: string) {
    return this.http.post(environment.api + "/add", {
      name: name
    });
  }

  updateBrand(id: string, name: string) {
    return this.http.put(environment.api + "/brand/" + id, {
      name: name
    });
  }

  deleteBrand(id: string) {
    return this.http.delete(environment.api + "/brand/" + id);
  }
}

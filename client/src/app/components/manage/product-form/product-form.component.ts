import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Brand } from '../../../types/brand';
import { Category } from '../../../types/category';
import { CategoryService } from '../../../services/category.service';
import { BrandService } from '../../../services/brand.service';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  formBuilder = inject(FormBuilder);
  productForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(5)]],
    shortDescription: [null, [Validators.required, Validators.minLength(10)]],
    description: [null, [Validators.required, Validators.minLength(30)]],
    price: [null, [Validators.required]],
    discount: [],
    images: this.formBuilder.array([]),
    categoryId: [null, [Validators.required]],
    brandId: [null, [Validators.required]],
  })

  categoryService = inject(CategoryService)
  brandService = inject(BrandService)
  productService = inject(ProductService)
  router = inject(Router)
  route = inject(ActivatedRoute)

  brands: Brand[] = []
  categories: Category[] = []
  id!: string

  ngOnInit() {
    this.categoryService.getCategories().subscribe((result: any) => {
      this.categories = result;
    })
    this.brandService.getBrands().subscribe((result: any) => {
      this.brands = result;
    })
    this.id = this.route.snapshot.params["id"]
    console.log(this.id)
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((result) => {
        for (let i = 0; i < result.images.length; i++) {
          this.addImage()
        }
        this.productForm.patchValue(result as any)
      })
    } else {
      this.addImage()
    }
  }

  addProduct() {
    let value = this.productForm.value;
    this.productService.addProduct(value as any).subscribe((result) => {
      alert("product added")
      this.router.navigateByUrl("/admin/products")
    })
  }

  updateProduct() {
    let value = this.productForm.value
    this.productService.updateProduct(this.id, value as any).subscribe((result) => {
      alert("product updated")
      this.router.navigateByUrl("/admin/products")
    })
  }

  get images() {
    return this.productForm.get('images') as FormArray
  }

  addImage() {
    this.images.push(this.formBuilder.control(null));
  }

  removeImage() {
    this.images.removeAt(this.images.length - 1)
  }
}

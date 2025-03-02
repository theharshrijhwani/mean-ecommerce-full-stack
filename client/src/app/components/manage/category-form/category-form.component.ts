import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  name!: string;
  categoryService = inject(CategoryService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  isEdit = false;
  id!: string

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    if (id) {
      this.id = id
      this.isEdit = true;
      this.categoryService.getCategoryById(this.id).subscribe((result: any) => {
        console.log(result)
      })
    }
  }

  add() {
    console.log(this.name);
    this.categoryService.addCategories(this.name).subscribe((result: any) => {
      alert("category added");
      this.router.navigateByUrl("/admin/categories")
    })
  }

  update() {
    console.log(this.name)
    this.categoryService.updateCategory(this.id, this.name).subscribe((result: any) => {
      console.log(result);
      alert("category updated");
      this.router.navigateByUrl("/admin/categories")
    })
  }
}

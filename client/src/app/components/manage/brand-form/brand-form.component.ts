import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrandService } from '../../../services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './brand-form.component.html',
  styleUrl: './brand-form.component.scss'
})
export class BrandFormComponent {
  name!: string;
  brandService = inject(BrandService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  isEdit = false;
  id!: string

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    if (id) {
      this.id = id
      this.isEdit = true;
      this.brandService.getBrandById(this.id).subscribe((result: any) => {
        console.log(result)
      })
    }
  }

  add() {
    console.log(this.name);
    this.brandService.addBrand(this.name).subscribe((result: any) => {
      alert("brand added");
      this.router.navigateByUrl("/admin/brands")
    })
  }

  update() {
    console.log(this.name)
    this.brandService.updateBrand(this.id, this.name).subscribe((result: any) => {
      console.log(result);
      alert("brand updated");
      this.router.navigateByUrl("/admin/brands")
    })
  }
}

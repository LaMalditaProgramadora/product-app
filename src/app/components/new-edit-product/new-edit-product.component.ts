import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-edit-product',
  templateUrl: './new-edit-product.component.html',
  styleUrls: ['./new-edit-product.component.css'],
})
export class NewEditProductComponent implements OnInit {
  product: Product = {
    description: '',
    price: 0,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(params['id']).subscribe({
          next: (data: Product) => {
            this.product = data;
          },
        });
      }
    });
  }

  saveProduct(): void {
    if (!this.productIsValid()) return;
    if (this.product.id) {
      // edit
      this.productService
        .updateProduct(this.product.id, this.product)
        .subscribe({
          next: () => {
            this.router.navigate(['business/products']);
          },
        });
    } else {
      // new
      this.productService.addProduct(this.product).subscribe({
        next: () => {
          this.router.navigate(['business/products']);
        },
      });
    }
  }

  productIsValid(): boolean {
    if (
      this.product.description === '' ||
      this.product.price == 0
    )
      return false;
    else return true;
  }
}

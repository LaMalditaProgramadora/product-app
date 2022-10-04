import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsCount: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsCount();
  }

  getProductsCount() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.productsCount = data.length;
      }
    });
  }

}

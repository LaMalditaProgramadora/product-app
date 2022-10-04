import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post(baseUrl, product);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put(`${baseUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}

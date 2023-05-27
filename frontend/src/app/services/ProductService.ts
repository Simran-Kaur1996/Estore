import { Injectable } from '@angular/core';
import { productsData } from 'src/app/db/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: any[] = productsData; // Assign the products array from products.ts

  getProductById(id: number): any {
    return this.products.find((product) => product.id === id);
  }
}

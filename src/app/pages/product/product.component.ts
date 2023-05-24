import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/ProductService';
import { productsData } from '../../db/products';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/entity/product';
import { addProduct } from 'src/app/app-state/actions/cart.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store
  ) {}

  ngOnInit() {
    const productId = +this.route.snapshot.params['id']; // Convert id to a number
    this.product = this.productService.getProductById(productId);
  }
  public addToCart(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}

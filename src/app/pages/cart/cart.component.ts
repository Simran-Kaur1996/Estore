import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart } from '../../cart-state-store/cart.actions';
import { addProduct, removeProduct } from '../../cart-state-store/cart.actions';
import {
  ProductGroup,
  selectGroupedCartEntries,
} from '../../cart-state-store/cart.selectors';
import { selectCountProducts } from 'src/app/cart-state-store/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartEntries$: Observable<ProductGroup[]>;
  countProduct$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.countProduct$ = store.select(selectCountProducts);
    this.totalPrice$ = new Observable();
    this.cartEntries$ = store.select(selectGroupedCartEntries);
  }

  ngOnInit(): void {}

  clearEntries() {
    this.store.dispatch(clearCart());
  }

  // more(entry: ProductGroup) {
  //   this.store.dispatch(addProduct(entry.product));
  // }

  // less(entry: ProductGroup) {
  //   this.store.dispatch(removeProduct(entry.product));
  // }
}

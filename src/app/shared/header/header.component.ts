import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TCartItemsState } from 'src/app/app-state/reducers/cart.reducer';
import { Product } from 'src/app/entity/product';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() sidebarToggleStatus: string | any;

  @Output() toggleStatus = new EventEmitter<string>();

  // cartProducts: Product[] | undefined;
  opened = false;
  cartObservable: Observable<Product[] | undefined>;
  cartProducts: Observable<Product[] | undefined> | undefined;

  // constructor(private store: Store<TCartItemsState>) {
  //   this.cartProducts = this.store.select((state) => state.cartItems);
  // }

  constructor(private store: Store<{ cart: TCartItemsState }>) {
    this.cartObservable = this.store.select((state) => state.cart.cartItems);
  }

  ngOnInit() {
    this.cartObservable.subscribe((cartItems) => {
      // Handle the updated cart items here
      console.log('Updated cart items:', cartItems);
      // this.cartProducts = cartItems;
      // console.log(this.cartProducts);
      this.cartProducts = cartItems ? of(cartItems) : undefined;
    });
    // this.cartProducts = this.store.select((state) => state.cart.cartItems);
  }

  //store.select('feedsReducer').subscribe((data: AppState) => this.state = data );

  // ngOnInit() {
  //   this.store.pipe(select((state) => state.cartItems)).subscribe((items) => {
  //     this.cartProducts = items;
  //   });
  // }

  toggleSidebar() {
    this.toggleStatus.emit('true');
  }
}

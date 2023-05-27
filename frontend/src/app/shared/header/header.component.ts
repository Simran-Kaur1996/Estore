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
  cartObservable: any;
  cartProducts: Observable<TCartItemsState>;
  cartItems: any;
  cartCount: number = 0;

  constructor(private store: Store<{ cart: TCartItemsState }>) {
    this.cartProducts = store.pipe(select('cart'));
  }

  ngOnInit() {
    this.cartObservable = this.cartProducts.subscribe(({ cartItems }) => {
      // Handle the updated cart items here
      console.log('Updated cart items:', cartItems);

      // Update cartCount or any other logic based on cartItems
      // this.cartCount = cartItems?.length ?? 0;
      // this.cartProducts = of(items);
      this.cartItems = cartItems;
      this.calculateCartCount(cartItems);
    });
  }

  calculateCartCount(cartProducts: any) {
    this.cartCount = 0;
    console.log(cartProducts);
    if (cartProducts) {
      cartProducts.forEach((item: Product) => {
        // Perform actions on each item in cartProducts
        console.log(item); // Example: Log each item to the console
        this.cartCount += item.quantity;
      });
    }
  }

  ngOnDestroy() {
    // Unsubscribe from the cartObservable to avoid memory leaks
    this.cartObservable.unsubscribe();
  }

  toggleSidebar() {
    this.toggleStatus.emit('true');
  }
}

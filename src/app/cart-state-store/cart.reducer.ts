import { Product } from './../entity/product';
import { createReducer, on } from '@ngrx/store';
import { addProduct, clearCart, removeProduct } from './cart.actions';

export const intialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  intialCartEntries,
  on(clearCart, (_) => []),

  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),
  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find((e) => e.id == product.id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  })
);

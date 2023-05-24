import { Product } from '../../entity/product';
import { createReducer, on } from '@ngrx/store';
import { addProduct, clearCart, removeProduct } from '../actions/cart.actions';

export type TCartItemsState = {
  cartItems: Product[];
};

export const intialCartEntries: TCartItemsState = {
  cartItems: [],
};

export const cartReducer = createReducer(
  intialCartEntries,
  on(clearCart, (state: TCartItemsState) => ({
    ...state,
    cartItems: [],
  })),
  on(addProduct, (state: TCartItemsState, product: Product) => ({
    ...state,
    cartItems: [...state.cartItems, product],
  })),
  on(removeProduct, (state: TCartItemsState, { id }) => ({
    ...state,
    cartItems: state.cartItems.filter((item) => item.id !== id),
  }))
);

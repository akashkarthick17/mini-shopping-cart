import { CartItem } from '../table-map/cart.model';

export class AddCartItemResponse {

  cartItem: CartItem;

  constructor(cartItem: CartItem) {
    this.cartItem = cartItem;
  }
}
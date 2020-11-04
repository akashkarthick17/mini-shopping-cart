import { CartItem } from '../table-map/cart.model';

export class UpdateCartItemResponse {

  cartItem: CartItem;

  constructor(cartItem: CartItem) {
    this.cartItem = cartItem;
  }
}
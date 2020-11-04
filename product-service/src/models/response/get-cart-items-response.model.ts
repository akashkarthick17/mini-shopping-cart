import { CartItem } from '../table-map/cart.model';

export class GetCartItemsResponse {

    cartItems: CartItem[];

    constructor(cartItems: CartItem[]) {
        this.cartItems = cartItems;
    }
}
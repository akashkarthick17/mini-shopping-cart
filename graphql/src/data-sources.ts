import { AddressAPI } from './address/data-source/address.data-source';
import { AuthAPI } from './auth/data-source/auth.data-source';
import { CartAPI } from './cart/data-source/cart.data-source';
import { OrderAPI } from './order/data-source/order.data-source';
import { ProductAPI } from './product/data-source/product.data-source';

export const DataSources = () => {
  return {
    authAPI: new AuthAPI(),
    productAPI: new ProductAPI(),
    cartAPI: new CartAPI(),
    addressAPI: new AddressAPI(),
    orderAPI: new OrderAPI(),
  }
};
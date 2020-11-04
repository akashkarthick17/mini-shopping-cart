import { TokenUtility } from '../../utils/token.utility';
import { CartAPI } from '../data-source/cart.data-source';

export class CartResolver {

  public static Mutation() {
    return {
      addCartItem: async (_root: any, { productId }: any, { user, dataSources }: any) => {
        const cartAPI: CartAPI = dataSources.cartAPI;
        TokenUtility.validateUser(user);
        return cartAPI.addCartItem(user.id, productId);
      },
      updateCartItem: async (_root: any, { id, quantity }: any, { user, dataSources }: any) => {
        const cartAPI: CartAPI = dataSources.cartAPI;
        TokenUtility.validateUser(user);
        return cartAPI.updateCartItem(user.id, id, quantity);
      },
      deleteCartItem: async (_root: any, { id }: any, { user, dataSources }: any) => {
        const cartAPI: CartAPI = dataSources.cartAPI;
        TokenUtility.validateUser(user);
        return cartAPI.deleteCartItem(user.id, id);
      },
      deleteCartItemsOfUser: async (_root: any, _: any, { user, dataSources }: any) => {
        const cartAPI: CartAPI = dataSources.cartAPI;
        TokenUtility.validateUser(user);
        return cartAPI.deleteCartItemsByUserID(user.id);
      }
    }
  }

  public static Query() {
    return {
      getCartItems: async (_root: any, _: any, { user, dataSources }: any) => {
        const cartAPI: CartAPI = dataSources.cartAPI;
        TokenUtility.validateUser(user);
        return cartAPI.getCartItems(user.id);
      },
    }
  }
}
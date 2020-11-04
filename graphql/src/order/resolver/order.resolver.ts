import { TokenUtility } from '../../utils/token.utility';
import { OrderAPI } from '../data-source/order.data-source';

export class OrderResolver {

  public static Mutation() {
    return {
      placeOrder: async (_root: any, { deliveryAddressId, paymentTypeId }: any, { user, dataSources }: any) => {
        const orderAPI: OrderAPI = dataSources.orderAPI;
        TokenUtility.validateUser(user);
        return orderAPI.placeOrder(user.id, deliveryAddressId, paymentTypeId);
      }
    }
  }
}
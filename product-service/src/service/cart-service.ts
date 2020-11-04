import fetch from 'node-fetch';
import { Service } from 'typedi';
import { GetCartItemsResponse } from '../models/response/get-cart-items-response.model';
import { AppResponse } from '../utils/response.utility';

@Service('cart.service')
export class CartService {
  url = process.env.CART_SERVICE_URL + '/cart-service';

  async getCartItemsByUserId(userId: string): Promise<GetCartItemsResponse> {
    return fetch(`${this.url}/api/v1/${userId}/cart-items`)
      .then(res => res.json())
      .then((res: AppResponse<GetCartItemsResponse>) => {
        if (res.isSuccess) {
          return res.responseBody;
        } else {
          throw res.responseBody;
        }
      })
  }
}
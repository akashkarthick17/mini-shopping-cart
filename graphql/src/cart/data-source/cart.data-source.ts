
import { RESTDataSource } from 'apollo-datasource-rest';
import { Response } from '../../model/response.model';
import { AddCartItemResponse, DeleteCartItemResponse, DeleteCartItemsOfUserResponse, GetCartItemsResponse, UpdateCartItemResponse } from '../../schema/graphql-schema';
import { ResponseUtility } from '../../utils/response-utility';

export class CartAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `${process.env.CART_SERVICE_URL}/cart-service/`;
  }

  async getCartItems(userId: string): Promise<GetCartItemsResponse> {
    return this.get<Response<GetCartItemsResponse>>(`api/v1/${userId}/cart-items`).then(result => {
      return ResponseUtility.handleResponse<GetCartItemsResponse>(result);
    });
  }

  async addCartItem(userId: string, productId: number): Promise<AddCartItemResponse> {
    return this.post<Response<AddCartItemResponse>>(`api/v1/${userId}/cart-items`, { productId }).then(result => {
      return ResponseUtility.handleResponse<AddCartItemResponse>(result);
    });
  }

  async updateCartItem(userId: string, cartItemId: number, quantity: number): Promise<UpdateCartItemResponse> {
    return this.put<Response<UpdateCartItemResponse>>(`api/v1/${userId}/cart-items/${cartItemId}`, { quantity }).then(result => {
      return ResponseUtility.handleResponse<UpdateCartItemResponse>(result);
    });
  }

  async deleteCartItem(userId: string, cartItemId: number): Promise<DeleteCartItemResponse> {
    return this.delete<Response<DeleteCartItemResponse>>(`api/v1/${userId}/cart-items/${cartItemId}`).then(result => {
      return ResponseUtility.handleResponse<DeleteCartItemResponse>(result);
    });
  }

  async deleteCartItemsByUserID(userId: string): Promise<DeleteCartItemsOfUserResponse> {
    return this.delete<Response<DeleteCartItemsOfUserResponse>>(`api/v1/${userId}/cart-items`).then(result => {
      return ResponseUtility.handleResponse<DeleteCartItemsOfUserResponse>(result);
    });
  }
}
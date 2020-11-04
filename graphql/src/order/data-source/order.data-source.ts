
import { RESTDataSource } from 'apollo-datasource-rest';
import { Response } from '../../model/response.model';
import { OrderResponse } from '../../schema/graphql-schema';
import { ResponseUtility } from '../../utils/response-utility';

export class OrderAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `${process.env.ORDER_SERVICE_URL}/order-service/`;
  }

  async placeOrder(userId: string, deliveryAddressId: number, paymentTypeId: number): Promise<OrderResponse> {
    return this.post<Response<OrderResponse>>(`api/v1/${userId}/order`, { deliveryAddressId, paymentTypeId }).then(result => {
      return ResponseUtility.handleResponse<OrderResponse>(result);
    });
  }
}

import { RESTDataSource } from 'apollo-datasource-rest';
import { Response } from '../../model/response.model';
import { AddAddressResponse, AddressInput, DeleteAddressResponse, GetAddressListResponse, GetAddressResponse, UpdateAddressResponse } from '../../schema/graphql-schema';
import { ResponseUtility } from '../../utils/response-utility';

export class AddressAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `${process.env.ADDRESS_SERVICE_URL}/user-address-service/`;
  }

  async getAddressList(userId: string): Promise<GetAddressListResponse> {
    return this.get<Response<GetAddressListResponse>>(`api/v1/${userId}/address-list`).then(result => {
      return ResponseUtility.handleResponse<GetAddressListResponse>(result);
    });
  }

  async getAddressById(userId: string, id: string): Promise<GetAddressResponse> {
    return this.get<Response<GetAddressResponse>>(`api/v1/${userId}/address-list/${id}`).then(result => {
      return ResponseUtility.handleResponse<GetAddressResponse>(result);
    });
  }

  async addAddress(userId: string, address: AddressInput): Promise<AddAddressResponse> {
    return this.post<Response<AddAddressResponse>>(`api/v1/${userId}/address-list`, { address }).then(result => {
      return ResponseUtility.handleResponse<AddAddressResponse>(result);
    });
  }

  async updateAddress(userId: string, id: number, address: AddressInput): Promise<UpdateAddressResponse> {
    return this.put<Response<UpdateAddressResponse>>(`api/v1/${userId}/address-list/${id}`, { address }).then(result => {
      return ResponseUtility.handleResponse<UpdateAddressResponse>(result);
    });
  }

  async deleteAddressById(userId: string, id: number): Promise<DeleteAddressResponse> {
    return this.delete<Response<DeleteAddressResponse>>(`api/v1/${userId}/address-list/${id}`).then(result => {
      return ResponseUtility.handleResponse<DeleteAddressResponse>(result);
    });
  }
}
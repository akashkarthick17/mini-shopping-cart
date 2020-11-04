import { TokenUtility } from '../../utils/token.utility';
import { AddressAPI } from '../data-source/address.data-source';

export class AddressResolver {

  public static Mutation() {
    return {
      addAddress: async (_root: any, { addressInput }: any, { user, dataSources }: any) => {
        const addressAPI: AddressAPI = dataSources.addressAPI;
        TokenUtility.validateUser(user);
        return addressAPI.addAddress(user.id, addressInput);
      },
      updateAddress: async (_root: any, { id, addressInput }: any, { user, dataSources }: any) => {
        const addressAPI: AddressAPI = dataSources.addressAPI;
        TokenUtility.validateUser(user);
        return addressAPI.updateAddress(user.id, id, addressInput);
      },
      deleteAddress: async (_root: any, { id }: any, { user, dataSources }: any) => {
        const addressAPI: AddressAPI = dataSources.addressAPI;
        TokenUtility.validateUser(user);
        return addressAPI.deleteAddressById(user.id, id);
      }
    }
  }

  public static Query() {
    return {
      getAddressList: async (_root: any, _: any, { user, dataSources }: any) => {
        const addressAPI: AddressAPI = dataSources.addressAPI;
        TokenUtility.validateUser(user);
        return addressAPI.getAddressList(user.id);
      },
      getAddress: async (_root: any, { id }: any, { user, dataSources }: any) => {
        const addressAPI: AddressAPI = dataSources.addressAPI;
        TokenUtility.validateUser(user);
        return addressAPI.getAddressById(user.id, id);
      },
    }
  }
}
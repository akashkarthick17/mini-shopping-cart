import { Address } from '../table-map/address.model';

export class GetAddressListResponse {

    addressList: Address[];

    constructor(addressList: Address[]) {
        this.addressList = addressList;
    }
}
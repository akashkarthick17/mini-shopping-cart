import { Address } from '../table-map/address.model';

export class GetAddressResponse {

    address: Address;

    constructor(address: Address) {
        this.address = address;
    }
}
import { Address } from '../table-map/address.model';

export class AddAddressResponse {

  address: Address;

  constructor(address: Address) {
    this.address = address;
  }
}
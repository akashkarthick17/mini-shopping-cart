import { Address } from '../table-map/address.model';

export class UpdateAddressResponse {

  address: Address;

  constructor(address: Address) {
    this.address = address;
  }
}
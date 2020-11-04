import 'reflect-metadata';
import { Inject, Service } from 'typedi';
import { Address } from '../models/table-map/address.model';
import { UserAddressRepository } from '../repositories/user-address.repository';

@Service('user.address.delegate')
export class UserAddressDelegate {

    constructor(
        @Inject('user.address.repository') private userAddressRepository: UserAddressRepository
    ) { }

    async getListOfAddressByUserId(userId: string): Promise<Address[]> {
        try {
            return this.userAddressRepository.getAddressListByUserId(userId);
        } catch (error) {
            throw error;
        }
    }

    async getAddressById(id: number, userId: string): Promise<Address> {
        try {
            return this.userAddressRepository.getAddressById(id, userId);
        } catch (error) {
            throw error;
        }
    }

    async addAddressByUserId(userId: string, address: Address): Promise<Address> {
        try {
            return this.userAddressRepository.addAddressByUserId(userId, address)
        } catch (error) {
            throw error;
        }
    }

    async updateAddressById(id: number, userId: string, address: Address): Promise<Address> {
        try {
            return this.userAddressRepository.updateAddressById(id, userId, address);
        } catch (error) {
            throw error;
        }
    }

    async deleteAddressById(id: number, userId: string): Promise<boolean> {
        try {
            return this.userAddressRepository.deleteAddressById(id, userId);
        } catch (error) {
            throw error;
        }
    }
}
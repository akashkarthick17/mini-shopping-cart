import { Inject, Service } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { SQLQueries } from '../constants/sql-queries.constants';
import { Address } from '../models/table-map/address.model';
import { MySQLClient } from '../utils/db.utility';

@Service('user.address.repository')
export class UserAddressRepository {

  constructor(@Inject('mysql.client') private mySQLClient: MySQLClient) { }

  async getAddressListByUserId(userId: string): Promise<Address[]> {
    try {
      const addressList: Address[] = await this.mySQLClient.executeQuery(SQLQueries.GET_ADDRESS_LIST_BY_USER_ID, [userId]);
      return addressList;
    } catch (error) {
      throw error;
    }
  }

  async getAddressById(id: number, userId: string): Promise<Address> {
    try {
      const addressList: Address[] = await this.mySQLClient.executeQuery(SQLQueries.GET_ADDRESS_BY_ID, [id, userId]);
      if (addressList.length === 1) {
        return addressList[0];
      } else {
        throw ErrorMessage.INVALID_ADDRESS_ID;
      }
    } catch (error) {
      throw error;
    }
  }

  async addAddressByUserId(userId: string, address: Address): Promise<Address> {
    try {
      const { address1, address2, city, gpsCoordinates,landmark, pinCode } = address;
      const result = await this.mySQLClient.executeQuery(SQLQueries.ADD_ADDRESS,
        [userId, address1, address2, pinCode, city, landmark, gpsCoordinates]);

      if (result?.affectedRows > 0) {
        const id = result.insertId;
        const address: Address = await this.getAddressById(id, userId);
        return address;
      } else {
        throw ErrorMessage.ERROR_ADDING_ADDRESS;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateAddressById(id: number, userId: string, address: Address): Promise<Address> {
    try {
      const { address1, address2, city, gpsCoordinates, landmark, pinCode } = address;
      const result = await this.mySQLClient.executeQuery(SQLQueries.UPDATE_ADDRESS_BY_ID,
        [address1, address2, pinCode, city, landmark, gpsCoordinates, id, userId]);
      if (result?.affectedRows > 0) {
        return this.getAddressById(id, userId);
      } else {
        throw ErrorMessage.ERROR_UPDATING_ADDRESS;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteAddressById(id: number, userId: string): Promise<boolean> {
    try {
      const result = await this.mySQLClient.executeQuery(SQLQueries.DELETE_ADDRESS_BY_ID,
        [id, userId]);
      if (result?.affectedRows > 0) {
        return true;
      } else {
        throw ErrorMessage.ERROR_DELETING_ADDRESS;
      }
    } catch (error) {
      throw error;
    }
  }
}
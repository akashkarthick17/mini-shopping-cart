import { Inject, Service } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { SQLQueries } from '../constants/sql-queries.constants';
import { CartTableRow } from '../models/table-map/cart-table.model';
import { DateTimeUtility } from '../utils/date-time.utility';
import { MySQLClient } from '../utils/db.utility';

@Service('cart.repository')
export class CartRepository {

  constructor(@Inject('mysql.client') private mySQLClient: MySQLClient) { }

  async getCartItemsByUserId(userId: string): Promise<CartTableRow[]> {
    try {
      const cartItems: CartTableRow[] = await this.mySQLClient.executeQuery(SQLQueries.GET_CART_ITEMS_BY_USER_ID, [userId]);
      return cartItems;
    } catch (error) {
      throw error;
    }
  }

  async getCartItemById(id: number): Promise<CartTableRow> {
    try {
      const cartItem: CartTableRow[] = await this.mySQLClient.executeQuery(SQLQueries.GET_CART_ITEM_BY_ID, [id]);
      return cartItem[0];
    } catch (error) {
      throw error;
    }
  }

  async getCartItemByUserIdAndProductId(userId: string, productId: number): Promise<CartTableRow> {
    try {
      const cartItem: CartTableRow[] = await this.mySQLClient.executeQuery(SQLQueries.GET_CART_ITEM_BY_USER_ID_AND_PRODUCT_ID,
        [userId, productId]);
      return cartItem[0];
    } catch (error) {
      throw error;
    }
  }

  async addCartItem(userId: string, productId: number, quantity: number): Promise<CartTableRow> {
    try {
      const currentTimeStamp = DateTimeUtility.getCurrentTimestamp();
      const result = await this.mySQLClient.executeQuery(SQLQueries.ADD_CART_ITEM,
        [productId, userId, quantity, currentTimeStamp, currentTimeStamp]);

      if (result?.affectedRows > 0) {
        const id = result.insertId;
        const cartItem: CartTableRow = await this.getCartItemById(id);
        return cartItem;
      } else {
        throw ErrorMessage.ERROR_ADDING_TO_CART;

      }
    } catch (error) {
      throw error;
    }
  }

  async updateCartItemById(id: number, userId: string, quantity: number): Promise<CartTableRow> {
    try {
      const result = await this.mySQLClient.executeQuery(SQLQueries.UPDATE_CART_ITEM_BY_ID,
        [quantity, DateTimeUtility.getCurrentTimestamp(), id, userId]);
      if (result?.affectedRows > 0) {
        return this.getCartItemById(id);
      } else {
        throw ErrorMessage.ERROR_UPDATING_CART;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteCartItemById(id: number, userId: string): Promise<boolean> {
    try {
      const result = await this.mySQLClient.executeQuery(SQLQueries.DELETE_CART_ITEM_BY_ID,
        [id, userId]);
      if (result?.affectedRows > 0) {
        return true;
      } else {
        throw ErrorMessage.ERROR_DELETING_CART;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteCartItemsByUserId(userId: string): Promise<boolean> {
    try {
      const result = await this.mySQLClient.executeQuery(SQLQueries.DELETE_CART_ITEMS_BY_USER_ID,
        [userId]);
        
      if (result?.affectedRows > 0) {
        return true;
      } else {
        throw ErrorMessage.ERROR_DELETING_CART;
      }
    } catch (error) {
      throw error;
    }
  }


}
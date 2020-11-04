import { PoolConnection } from 'mysql';
import { Inject, Service } from 'typedi';
import { SQLQueries } from '../constants/sql-queries.constants';
import { CartItem } from '../models/table-map/cart.model';
import { DateTimeUtility } from '../utils/date-time.utility';
import { MySQLClient } from '../utils/db.utility';

@Service('order.repository')
export class OrderRepository {

  constructor(@Inject('mysql.client') private mySQLClient: MySQLClient) { }

  connection: PoolConnection = null;

  async beginOrder(): Promise<void> {
    this.connection = await this.mySQLClient.beginTransaction();
  }

  async insertOrder(userId: string, deliveryAddressId: number, paymentTypeId: number, orderStatusId: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.connection.query(SQLQueries.CREATE_ORDER,
        [userId, deliveryAddressId, paymentTypeId, orderStatusId, DateTimeUtility.getCurrentTimestamp()],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          else {
            var orderId = results.insertId;
            return resolve(Number(orderId));
          }
        })
    });
  }

  async insertOrderItem(orderId: number, cartItem: CartItem): Promise<void> {
    const {
      product: {
        id: productId,
        discountPercentage,
        offerPrice,
        price
      },
      quantity,
    } = cartItem;

    return new Promise((resolve, reject) => {
      this.connection.query(SQLQueries.INSERT_ORDER_ITEMS, [orderId, productId, quantity, price, discountPercentage, offerPrice],
        (error, results, fields) => {
          error ? reject(error) : resolve();
        });
    });
  }

  async updateProductStock(cartItem: CartItem): Promise<void> {
    const {
      product: {
        id: productId,
        warehouseId,
        stockCount,
      },
      quantity,
    } = cartItem;

    return new Promise((resolve, reject) => {
      if (stockCount - quantity >= 0) {
        this.connection.query(SQLQueries.UPDATE_PRODUCT_STOCK, [stockCount - quantity, productId, warehouseId],
          (error, results, fields) => {
            if (error) { reject(error); }
            resolve();
          });
      } else {
        reject('Stocks unavailable');
      }
    });
  }

  async confirmOrder(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.commit((err) => {
        if (err) {
          reject(err);
        } else {
          this.connection = null;
          resolve();
        }
      });
    });
  }

  async rejectOrder(error: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.rollback((err) => {
        this.connection = null;
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    })
  }

}
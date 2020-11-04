import { readFileSync } from 'fs';

export class SQLQueries {
  public static CREATE_ORDER = readFileSync(__dirname + '/../sql/create-order.sql').toString();

  public static INSERT_ORDER_ITEMS = readFileSync(__dirname + '/../sql/insert-order-items.sql').toString();

  public static UPDATE_PRODUCT_STOCK = readFileSync(__dirname + '/../sql/update-product-stock.sql').toString();
};

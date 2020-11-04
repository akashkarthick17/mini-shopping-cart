import { readFileSync } from 'fs';

export class SQLQueries {
  public static GET_CART_ITEMS_BY_USER_ID = readFileSync(__dirname + '/../sql/get-cart-items-by-user-id.sql').toString();

  public static GET_CART_ITEM_BY_ID = readFileSync(__dirname + '/../sql/get-cart-item-by-id.sql').toString();

  public static GET_CART_ITEM_BY_USER_ID_AND_PRODUCT_ID = readFileSync(__dirname + '/../sql/get-cart-item-by-uid-pid.sql').toString();

  public static UPDATE_CART_ITEM_BY_ID = readFileSync(__dirname + '/../sql/update-cart-item-by-id.sql').toString();

  public static DELETE_CART_ITEM_BY_ID = readFileSync(__dirname + '/../sql/delete-cart-item-by-id.sql').toString();

  public static DELETE_CART_ITEMS_BY_USER_ID = readFileSync(__dirname + '/../sql/delete-cart-items-by-user-id.sql').toString();

  public static ADD_CART_ITEM = readFileSync(__dirname + '/../sql/add-cart-item.sql').toString();
};

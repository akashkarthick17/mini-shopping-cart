import { readFileSync } from 'fs';

export class SQLQueries {
  public static GET_ADDRESS_LIST_BY_USER_ID = readFileSync(__dirname + '/../sql/get-address-list-by-user-id.sql').toString();

  public static GET_ADDRESS_BY_ID = readFileSync(__dirname + '/../sql/get-address-by-id.sql').toString();

  public static UPDATE_ADDRESS_BY_ID = readFileSync(__dirname + '/../sql/update-address-by-id.sql').toString();

  public static DELETE_ADDRESS_BY_ID = readFileSync(__dirname + '/../sql/delete-address-by-id.sql').toString();

  public static ADD_ADDRESS = readFileSync(__dirname + '/../sql/add-address.sql').toString();
};

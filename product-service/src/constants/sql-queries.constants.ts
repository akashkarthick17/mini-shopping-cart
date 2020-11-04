import { readFileSync } from 'fs';

export class SQLQueries {
  public static GET_FEATURED_PRODUCTS = readFileSync(__dirname + '/../sql/get-featured-products.sql').toString();

  public static GET_PRODUCT_BY_ID = readFileSync(__dirname + '/../sql/get-product-by-id.sql').toString();

  public static GET_PRODUCTS_BY_SUB_CATEGORY = readFileSync(__dirname + '/../sql/get-products-by-sub-category.sql').toString();

  public static GET_PRODUCTS_BY_SUB_CATEGORY_COUNT = readFileSync(__dirname + '/../sql/sub-category-count.sql').toString();

  public static GET_PRODUCTS_BY_CATEGORY = readFileSync(__dirname + '/../sql/get-products-by-category.sql').toString();

  public static GET_PRODUCTS_BY_CATEGORY_COUNT = readFileSync(__dirname + '/../sql/category-count.sql').toString();

  public static SEARCH_PRODUCTS = readFileSync(__dirname + '/../sql/search-products.sql').toString();

  public static SEARCH_PRODUCTS_COUNT = readFileSync(__dirname + '/../sql/search-products-count.sql').toString();

  public static ORDER_BY_PRICE = ' ORDER BY p.price';

  public static ASC = ' ASC';

  public static DESC = ' DESC';

  public static LIMIT = ' LIMIT ?,?'
};

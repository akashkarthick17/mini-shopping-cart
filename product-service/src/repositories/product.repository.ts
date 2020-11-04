import { Inject, Service } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { SQLQueries } from '../constants/sql-queries.constants';
import { SortBy, SortOrder } from '../models/request/product-request.model';
import { ProductResult } from '../models/table-map/product-result.model';
import { Product } from '../models/table-map/product.model';
import { TotalProducts } from '../models/table-map/products-count.model';
import { ProductsResult } from '../models/table-map/products-result.model';
import { AppUtility } from '../utils/app-utility';
import { MySQLClient } from '../utils/db.utility';

@Service('product.repository')
export class ProductRepository {

  constructor(@Inject('mysql.client') private mySQLClient: MySQLClient) { }

  async getFeaturedProducts(): Promise<ProductsResult> {
    try {
      const products: Product[] = await this.mySQLClient.executeQuery(SQLQueries.GET_FEATURED_PRODUCTS);
      return { products, totalProducts: 0 };
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id: number): Promise<ProductResult> {
    try {
      const products: Product[] = await this.mySQLClient.executeQuery(SQLQueries.GET_PRODUCT_BY_ID, [id]);
      if (products.length > 0) {
        return { product: products[0] };
      } else {
        throw ErrorMessage.INVALID_PRODUCT_ID;
      }
    } catch (error) {
      throw error;
    }
  }

  async getProductsBySearchTerm(searchTerm: string, pageOffset: number, pageLimit: number, subCategory: string = '', category: string = '', sortBy: SortBy, sortOrder: SortOrder): Promise<ProductsResult> {
    try {
      const rowNumber: number = AppUtility.getRowNumber(pageOffset, pageLimit);

      const constructedQuery: string = MySQLClient.constructQuery(SQLQueries.SEARCH_PRODUCTS, sortBy, sortOrder);

      const products: Product[] = await this.mySQLClient.executeQuery(
        constructedQuery,
        [`%${searchTerm}%`, `%${category}%`, `%${subCategory}%`, rowNumber, pageLimit]);
      const [{ totalProducts }]: [TotalProducts] = await this.mySQLClient.executeQuery(SQLQueries.SEARCH_PRODUCTS_COUNT,
        [`%${searchTerm}%`, `%${category}%`, `%${subCategory}%`])
      return { products, totalProducts }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProductsBySubCategory(subCategory: string, pageOffset: number, pageLimit: number, sortBy: SortBy, sortOrder: SortOrder): Promise<ProductsResult> {
    try {
      const rowNumber: number = AppUtility.getRowNumber(pageOffset, pageLimit);

      let constructedQuery: string = MySQLClient.constructQuery(SQLQueries.GET_PRODUCTS_BY_SUB_CATEGORY, sortBy, sortOrder);
      constructedQuery += SQLQueries.LIMIT;

      const products: Product[] = await this.mySQLClient.executeQuery(
        constructedQuery,
        [`%${subCategory}%`, rowNumber, pageLimit]);
      const [{ totalProducts }]: [TotalProducts] = await this.mySQLClient.executeQuery(SQLQueries.GET_PRODUCTS_BY_SUB_CATEGORY_COUNT, [`%${subCategory}%`])
      return { products, totalProducts }
    } catch (error) {
      throw error;
    }
  }

  async getProductsByCategory(category: string, pageOffset: number, pageLimit: number, sortBy: SortBy, sortOrder: SortOrder): Promise<ProductsResult> {
    try {
      const rowNumber: number = AppUtility.getRowNumber(pageOffset, pageLimit);

      let constructedQuery: string = MySQLClient.constructQuery(SQLQueries.GET_PRODUCTS_BY_CATEGORY, sortBy, sortOrder);
      constructedQuery += SQLQueries.LIMIT;

      const products: Product[] = await this.mySQLClient.executeQuery(
        constructedQuery,
        [`%${category}%`, rowNumber, pageLimit]);
      const [{ totalProducts }]: [TotalProducts] = await this.mySQLClient.executeQuery(SQLQueries.GET_PRODUCTS_BY_CATEGORY_COUNT, [`%${category}%`])
      return { products, totalProducts }
    } catch (error) {
      throw error;
    }
  }

}
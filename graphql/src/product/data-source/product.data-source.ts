
import { RESTDataSource } from 'apollo-datasource-rest';
import { Response } from '../../model/response.model';
import { ProductInput, ProductResponse, ProductsResponse, SortOrder } from '../../schema/graphql-schema';
import { ResponseUtility } from '../../utils/response-utility';

export class ProductAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `${process.env.PRODUCT_SERVICE_URL}/product-service/`;
  }

  async getProductById(id: number): Promise<ProductResponse> {
    return this.get<Response<ProductResponse>>('api/v1/products/' + id).then(result => {
      return ResponseUtility.handleResponse<ProductResponse>(result);
    });
  }

  async getProducts(productInput: ProductInput, token = ''): Promise<ProductsResponse> {
    const { category, subCategory, searchTerm, pageLimit, pageOffset, sortBy, sortOrder } = productInput;
    let url: string[] = [];

    if (category) {
      url.push(`category=${category}`);
    }
    if (subCategory) {
      url.push(`sub_category=${subCategory}`);
    }
    if (searchTerm) {
      url.push(`search_term=${searchTerm}`);
    }
    if (sortBy) {
      url.push(`sort_by=${sortBy}`)
      if (sortOrder) {
        url.push(`sort_order=${sortOrder}`)
      } else {
        url.push(`sort_order=${SortOrder.Asc}`)
      }
    }

    url.push(`page_limit=${pageLimit}`, `page_offset=${pageOffset}`);

    const headers = {
      'Authorization': 'Bearer ' + token,
    }

    return this.get<Response<ProductsResponse>>('api/v1/products?' + url.join('&'), null, { ...(token && { headers }) }).then(result => {
      return ResponseUtility.handleResponse<ProductsResponse>(result);
    });
  }
}
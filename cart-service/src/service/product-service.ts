import fetch from 'node-fetch';
import { Service } from 'typedi';
import { Product } from '../models/table-map/product.model';
import { AppResponse } from '../utils/response.utility';

@Service('product.service')
export class ProductService {
  url = process.env.PRODUCT_SERVICE_URL + '/product-service';

  async getProductById(id: number): Promise<Product> {
    return fetch(`${this.url}/api/v1/products/${id}`)
      .then(res => res.json())
      .then<Product>((res: AppResponse<any>) => {
        if (res.isSuccess) {
          return res.responseBody.product;
        } else {
          console.log('error --> ', res.responseBody);
          throw res.responseBody;
        }
      });
  }

}
import { TokenUtility } from '../../utils/token.utility';
import { ProductAPI } from '../data-source/product.data-source';

export class ProductResolver {

  public static Query() {
    return {
      getProduct: async (_root: any, { id }: any, { dataSources }: any) => {
        const productAPI: ProductAPI = dataSources.productAPI;
        return productAPI.getProductById(id);
      },
      getProducts: async (_root: any, { productInput }: any, { user, token, dataSources }: any) => {
        const productAPI: ProductAPI = dataSources.productAPI;
        if (token) {
          TokenUtility.validateUser(user);
          return productAPI.getProducts(productInput, token);
        }
        return productAPI.getProducts(productInput);
      }
    }
  }
}
import { Product } from './product.model';
import { TotalProducts } from './products-count.model';

export interface ProductsResult extends TotalProducts {
  products: Product[];
}
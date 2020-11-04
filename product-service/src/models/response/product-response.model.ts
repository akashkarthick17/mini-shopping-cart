import { Product } from '../table-map/product.model';

export class ProductResponse {

    product: Product;

    constructor(product: Product) {
        this.product = product;
    }
}
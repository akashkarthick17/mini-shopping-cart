import { Product } from '../table-map/product.model';

export class ProductsResponse {

    products: Product[];
    totalPages: number;

    constructor(products: Product[], totalPages: number) {
        this.products = products;
        this.totalPages = totalPages;
    }
}
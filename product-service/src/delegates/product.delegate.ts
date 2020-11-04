import 'reflect-metadata';
import { Inject, Service } from 'typedi';
import { ValidationSchemas } from '../constants/validation-schemas.constants';
import { ProductQueryParams } from '../models/request/product-request.model';
import { ProductsResponse } from '../models/response/products-response.model';
import { ProductResult } from '../models/table-map/product-result.model';
import { ProductsResult } from '../models/table-map/products-result.model';
import { ProductRepository } from '../repositories/product.repository';
import { CartService } from '../service/cart-service';
import { AppUtility } from '../utils/app-utility';
import { RequestUtility } from '../utils/request.utility';

@Service('product.delegate')
export class ProductDelegate {

    constructor(
        @Inject('product.repository') private productRepository: ProductRepository,
        @Inject('cart.service') private cartService: CartService
    ) { }

    async getProducts(productQueryParams: ProductQueryParams, userId: string): Promise<ProductsResponse> {
        let productsResult: ProductsResult = null;

        try {
            if (AppUtility.isValidProductQueryParams(productQueryParams)) {
                await RequestUtility.validateSchema(ValidationSchemas.GET_PRODUCTS, productQueryParams);
                const {
                    category,
                    sub_category: subCategory,
                    search_term: searchTerm,
                    page_offset: pageOffset,
                    page_limit: pageLimit,
                    sort_by: sortBy,
                    sort_order: sortOrder
                } = productQueryParams;
                if (searchTerm) {
                    productsResult = await this.productRepository.getProductsBySearchTerm(searchTerm, +pageOffset, +pageLimit, subCategory, category, sortBy, sortOrder);
                } else if (subCategory) {
                    productsResult = await this.productRepository.getProductsBySubCategory(subCategory, +pageOffset, +pageLimit, sortBy, sortOrder);
                } else {
                    productsResult = await this.productRepository.getProductsByCategory(category, +pageOffset, +pageLimit, sortBy, sortOrder);
                }
            } else {
                productsResult = await this.productRepository.getFeaturedProducts();
            }

            productsResult.products = AppUtility.calculateOfferPriceOfProducts(productsResult.products);

            let cartItems = [];

            if (userId) {
                cartItems = (await this.cartService.getCartItemsByUserId(userId)).cartItems;
            }

            productsResult.products = AppUtility.mapCartItems(productsResult.products, cartItems);

            const totalPages: number = Math.ceil(productsResult.totalProducts / (+productQueryParams.page_limit));

            return new ProductsResponse(productsResult.products, totalPages);

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getProductById(id: number): Promise<ProductResult> {
        const productResult = await this.productRepository.getProductById(id);
        productResult.product = AppUtility.calculateOfferPriceOfProduct(productResult.product);
        return productResult;
    }
}
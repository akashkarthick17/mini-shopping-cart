import 'reflect-metadata';
import { Inject, Service } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { CartTableRow } from '../models/table-map/cart-table.model';
import { CartItem } from '../models/table-map/cart.model';
import { Product } from '../models/table-map/product.model';
import { CartRepository } from '../repositories/cart.repository';
import { ProductService } from '../service/product-service';
import { AppUtility } from '../utils/app-utility';

@Service('cart.delegate')
export class CartDelegate {

    constructor(
        @Inject('cart.repository') private cartRepository: CartRepository,
        @Inject('product.service') private productService: ProductService,
    ) { }

    async getCartItemsByUserId(userId: string): Promise<CartItem[]> {
        try {
            const cartTableRows: CartTableRow[] = await this.cartRepository.getCartItemsByUserId(userId);
            const cartItems = await AppUtility.convertCartTableRowsToCartItems(cartTableRows, this.productService);
            return cartItems;
        } catch (error) {
            throw error;
        }
    }

    async addCartItem(userId: string, productId: number): Promise<CartItem> {
        try {
            const product: Product = await this.productService.getProductById(productId);
            if (product?.id) {
                const existingCartITem = await this.cartRepository.getCartItemByUserIdAndProductId(userId, productId);

                if (!Boolean(existingCartITem?.id)) {
                    const cartTableRow: CartTableRow = await this.cartRepository.addCartItem(userId, productId, 1);
                    const cartItem: CartItem = await AppUtility.convertCartTableRowToCartItem(cartTableRow, this.productService);
                    return cartItem;
                } else {
                    throw ErrorMessage.CART_ITEM_EXISTS;
                }
            } else {
                throw ErrorMessage.INVALID_PRODUCT_ID;
            }
        } catch (error) {
            throw error;
        }
    }

    async updateCartItemById(id: number, userId: string, quantity: number): Promise<CartItem> {
        try {
            const cartTableRow: CartTableRow = await this.cartRepository.updateCartItemById(id, userId, quantity);
            const cartItem: CartItem = await AppUtility.convertCartTableRowToCartItem(cartTableRow, this.productService);
            return cartItem;
        } catch (error) {
            throw error;
        }
    }

    async deleteCartItemById(id: number, userId: string): Promise<boolean> {
        try {
            return this.cartRepository.deleteCartItemById(id, userId);
        } catch (error) {
            throw error;
        }
    }

    async deleteCartItemsByUserId(userId: string): Promise<boolean> {
        try {
            return this.cartRepository.deleteCartItemsByUserId(userId);
        } catch (error) {
            throw error;
        }
    }
}
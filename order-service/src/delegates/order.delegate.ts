import 'reflect-metadata';
import { Inject, Service } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { OrderRepository } from '../repositories/order.repository';
import { CartService } from '../service/cart-service';

@Service('order.delegate')
export class CartDelegate {

    constructor(
        @Inject('order.repository') private orderRepository: OrderRepository,
        @Inject('cart.service') private cartService: CartService
    ) { }

    async order(userId: string, deliveryAddressId: number, paymentTypeId: number): Promise<boolean> {
        try {
            const { cartItems } = await this.cartService.getCartItemsByUserId(userId);
            if (cartItems.length > 0) {
                await this.orderRepository.beginOrder();
                try {
                    const orderId: number = await this.orderRepository.insertOrder(userId, deliveryAddressId, paymentTypeId, 1);
                    for (let index: number = 0; index < cartItems.length; index++) {
                        const cartItem = cartItems[index];
                        await this.orderRepository.insertOrderItem(orderId, cartItem);
                        await this.orderRepository.updateProductStock(cartItem);
                    }
                    await this.orderRepository.confirmOrder();
                } catch (error) {
                    await this.orderRepository.rejectOrder(error);
                    throw error;
                }
                await this.cartService.deleteCartItemsByUserId(userId);
                return true;
            } else {
                throw ErrorMessage.ERROR_PLACING_ORDER;
            }
        } catch (error) {
            throw error;
        }
    }
}
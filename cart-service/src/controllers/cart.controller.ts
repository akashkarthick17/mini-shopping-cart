import { Request, Response } from 'express';
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from 'routing-controllers';
import { Inject } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { CartDelegate } from '../delegates/cart.delegate';
import { AddCartItemResponse } from '../models/response/add-cart-item-response';
import { DeleteCartItemResponse } from '../models/response/delete-cart-item-response';
import { GetCartItemsResponse } from '../models/response/get-cart-items-response.model';
import { UpdateCartItemResponse } from '../models/response/update-cart-item.response';
import { CartItem } from '../models/table-map/cart.model';
import { ErrorHandler } from '../utils/error.handler';
import { ResponseUtility } from '../utils/response.utility';

@Controller('/cart-service/api/v1')
export class CartController {

    constructor(@Inject('cart.delegate') private cartDelegate: CartDelegate) { }

    @Get('/:userId/cart-items')
    async getCartItems(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string) {
        try {
            const cartItems: CartItem[] = await this.cartDelegate.getCartItemsByUserId(userId);
            return res.send(ResponseUtility.generateResponse(true, new GetCartItemsResponse(cartItems)));
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Post('/:userId/cart-items')
    async addCartItem(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string) {
        try {
            const productId: number = body.productId;
            const cartItem: CartItem = await this.cartDelegate.addCartItem(userId, productId);
            return res.send(ResponseUtility.generateResponse(true, new AddCartItemResponse(cartItem)));
        } catch (error) {
            console.log(error);
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Put('/:userId/cart-items/:id')
    async updateCartItem(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string, @Param('id') id: string) {
        try {
            const quantity: number = body.quantity;
            if (quantity > 0) {
                const cartItem: CartItem = await this.cartDelegate.updateCartItemById(+id, userId, quantity);
                return res.send(ResponseUtility.generateResponse(true, new UpdateCartItemResponse(cartItem)))
            } else {
                throw ErrorMessage.INVALID_CART_QUANTITY;
            }
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Delete('/:userId/cart-items/:id')
    async deleteCartItem(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string, @Param('id') id: string) {
        try {
            const isDeleted: boolean = await this.cartDelegate.deleteCartItemById(+id, userId);
            if (isDeleted) {
                return res.send(ResponseUtility.generateResponse(true, new DeleteCartItemResponse('Successfully Deleted.')))
            } else {
                throw ErrorMessage.ERROR_DELETING_CART;
            }
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Delete('/:userId/cart-items')
    async deleteCartItemsByUserId(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string) {
        try {
            const isDeleted: boolean = await this.cartDelegate.deleteCartItemsByUserId(userId);
            if (isDeleted) {
                return res.send(ResponseUtility.generateResponse(true, new DeleteCartItemResponse('Successfully Deleted.')))
            } else {
                throw ErrorMessage.ERROR_DELETING_CART;
            }
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }
}
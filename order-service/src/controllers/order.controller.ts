import { Request, Response } from 'express';
import { Body, Controller, Param, Post, Req, Res } from 'routing-controllers';
import { Inject } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { CartDelegate as OrderDelegate } from '../delegates/order.delegate';
import { OrderRequest } from '../models/request/order-request.model';
import { OrderResponse } from '../models/response/order-response.model';
import { ErrorHandler } from '../utils/error.handler';
import { ResponseUtility } from '../utils/response.utility';

@Controller('/order-service/api/v1')
export class OrderController {

    constructor(@Inject('order.delegate') private orderDelegate: OrderDelegate) { }

    @Post('/:userId/order')
    async order(@Req() req: Request, @Res() res: Response, @Body() body: OrderRequest, @Param('userId') userId: string) {
        try {
            const { deliveryAddressId, paymentTypeId } = body;
            const isOrderPlaced = await this.orderDelegate.order(userId, deliveryAddressId, paymentTypeId);
            if (isOrderPlaced) {
                return res.send(ResponseUtility.generateResponse(true, new OrderResponse('Successfully Placed Order')));
            } else {
                throw ErrorMessage.ERROR_PLACING_ORDER;
            }
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }
}
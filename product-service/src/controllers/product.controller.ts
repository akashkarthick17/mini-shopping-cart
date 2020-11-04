import { Request, Response } from 'express';
import { Body, Controller, Get, Param, QueryParams, Req, Res } from 'routing-controllers';
import { Inject } from 'typedi';
import { ProductDelegate } from '../delegates/product.delegate';
import { ProductQueryParams } from '../models/request/product-request.model';
import { ProductResponse } from '../models/response/product-response.model';
import { ProductsResponse } from '../models/response/products-response.model';
import { ProductResult } from '../models/table-map/product-result.model';
import { ErrorHandler } from '../utils/error.handler';
import { ResponseUtility } from '../utils/response.utility';
import { JwtUtility } from '../utils/token.utility';

@Controller('/product-service/api/v1')
export class ProductController {

    constructor(@Inject('product.delegate') private productDelegate: ProductDelegate) { }

    @Get('/products')
    async getProducts(@Req() req: Request, @Res() res: Response, @Body() body: any, @QueryParams() productQueryParams: ProductQueryParams) {
        try {
            const token: string = JwtUtility.getJwtTokenFromHeader(req.headers.authorization);
            const userId: string = await JwtUtility.getUserIdFromToken(token);
            const products: ProductsResponse = await this.productDelegate.getProducts(productQueryParams, userId);
            return res.send(ResponseUtility.generateResponse(true, products));
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Get('/products/:productId')
    async getProductById(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('productId') productId: string) {
        try {
            const { product }: ProductResult = await this.productDelegate.getProductById(+productId);
            return res.send(ResponseUtility.generateResponse(true, new ProductResponse(product)));
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }
}
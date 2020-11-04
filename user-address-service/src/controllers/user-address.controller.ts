import { Request, Response } from 'express';
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from 'routing-controllers';
import { Inject } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { UserAddressDelegate } from '../delegates/user-address.delegate';
import { DeleteAddressResponse } from '../models/response/delete-address-response';
import { GetAddressListResponse } from '../models/response/get-address-list-response.model';
import { GetAddressResponse } from '../models/response/get-address-response.model';
import { UpdateAddressResponse } from '../models/response/update-address.response';
import { Address } from '../models/table-map/address.model';
import { ErrorHandler } from '../utils/error.handler';
import { ResponseUtility } from '../utils/response.utility';

@Controller('/user-address-service/api/v1')
export class UserAddressController {

    constructor(@Inject('user.address.delegate') private userAddressDelegate: UserAddressDelegate) { }

    @Get('/:userId/address-list')
    async getListOfAddressByUserId(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string) {
        try {
            const addressList: Address[] = await this.userAddressDelegate.getListOfAddressByUserId(userId);
            return res.send(ResponseUtility.generateResponse(true, new GetAddressListResponse(addressList)));
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Get('/:userId/address-list/:id')
    async getAddressById(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string, @Param('id') id: string) {
        try {
            const address: Address = await this.userAddressDelegate.getAddressById(+id, userId);
            return res.send(ResponseUtility.generateResponse(true, new GetAddressResponse(address)));
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Post('/:userId/address-list')
    async addAddressByUserId(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string) {
        try {
            const address: Address = body.address;
            const addedAddress: Address = await this.userAddressDelegate.addAddressByUserId(userId, address);
            return res.send(ResponseUtility.generateResponse(true, new GetAddressResponse(addedAddress)));
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Put('/:userId/address-list/:id')
    async updateAddressById(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string, @Param('id') id: string) {
        try {
            const address: Address = body.address;
            const updatedAddress: Address = await this.userAddressDelegate.updateAddressById(+id, userId, address);
            return res.send(ResponseUtility.generateResponse(true, new UpdateAddressResponse(updatedAddress)))
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Delete('/:userId/address-list/:id')
    async deleteAddressById(@Req() req: Request, @Res() res: Response, @Body() body: any, @Param('userId') userId: string, @Param('id') id: string) {
        try {
            const isDeleted: boolean = await this.userAddressDelegate.deleteAddressById(+id, userId);
            if (isDeleted) {
                return res.send(ResponseUtility.generateResponse(true, new DeleteAddressResponse('Successfully Deleted.')))
            } else {
                throw ErrorMessage.ERROR_DELETING_ADDRESS;
            }
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }
}
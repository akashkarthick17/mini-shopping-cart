import { Request, Response } from 'express';
import { Controller, Get, Req, Res } from 'routing-controllers';
import { ResponseUtility } from '../utils/response.utility';

@Controller('/auth-service')
export class TestController {

    @Get('/health')
    async getAll(@Req() req: Request, @Res() res: Response) {
        return res.send(ResponseUtility.generateResponse(true, { message: 'The service is up and running.' }));
    }

}
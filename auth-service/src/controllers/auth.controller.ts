import { Request, Response } from 'express';
import { Body, Controller, Post, Req, Res } from 'routing-controllers';
import { Inject } from 'typedi';
import { AuthDelegate } from '../delegates/auth.delegate';
import { LoginRequest } from '../models/request/login-request.model';
import { RegisterRequest } from '../models/request/register-request.model';
import { ErrorHandler } from '../utils/error.handler';
import { ResponseUtility } from '../utils/response.utility';

@Controller('/auth-service/api/v1')
export class AuthController {

    constructor(@Inject('auth.delegate') private authDelegate: AuthDelegate) { }

    @Post('/login')
    async login(@Req() req: Request, @Res() res: Response, @Body() body: LoginRequest): Promise<Response<any>> {
        try {
            const result = await this.authDelegate.login(body);
            return res.send(ResponseUtility.generateResponse(true, result));
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Post('/validate-token')
    async validateToken(@Req() req: Request, @Res() res: Response, @Body() body: LoginRequest): Promise<Response<any>> {
        try {
            const result = await this.authDelegate.validateToken(req?.headers?.authorization);
            return res.send(ResponseUtility.generateResponse(true, result));
        } catch (error) {
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }

    @Post('/register')
    async register(@Req() req: Request, @Res() res: Response, @Body() body: RegisterRequest) {
        try {
            const result = await this.authDelegate.register(body);
            return res.send(ResponseUtility.generateResponse(true, result));
        } catch (error) {
            console.log(error);
            return res.send(ResponseUtility.generateResponse(false, ErrorHandler.handle(error)));
        }
    }
}
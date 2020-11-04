import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { ExpressMiddlewareInterface } from "routing-controllers";
import { ErrorMessage } from '../constants/error.constants';
import { ResponseUtility } from '../utils/response.utility';
import { JwtUtility } from '../utils/token.utility';

export class AuthMiddleware implements ExpressMiddlewareInterface { // interface implementation is optional

  use(request: Request, response: Response, next?: (err?: any) => any): any {
    if (request.headers.authorization) {
      const token = JwtUtility.getJwtTokenFromHeader(request.headers.authorization);
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
          response.send(ResponseUtility.generateResponse(false, ErrorMessage.INVALID_TOKEN));
        } else {
          next();
        }
      });
    } else {
      response.send(ResponseUtility.generateResponse(false, ErrorMessage.TOKEN_NOT_FOUND));
    }

  }

}
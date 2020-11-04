import Ajv from 'ajv';
import { Request } from 'express';
import jwtDecode from 'jwt-decode';
import { ErrorMessage } from '../constants/error.constants';

export class RequestUtility {
    static checkSchema(schema: any, data: any): Promise<boolean> {
        try {
            const ajv = new Ajv();
            const validate = ajv.compile(schema);
            const valid = validate(data);
            if (!valid) {
                return Promise.reject(ErrorMessage.INVALID_BODY);
            }
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(ErrorMessage.INTERNAL_SERVER_ERROR);
        }

    }

    static extractUserIdFromToken(req: Request): number {
        const authorizationHeader = req.headers.authorization;
        if (authorizationHeader) {
            const token = authorizationHeader.split(' ')[1];
            const decodedToken: any = jwtDecode(token);
            return Number(decodedToken.id);
        } else {
            return 0;
        }
    }

    static extractUserTypeFromToken(req: Request): string {
        const authorizationHeader = req.headers.authorization;
        if (authorizationHeader) {
            const token = authorizationHeader.split(' ')[1];
            const decodedToken: any = jwtDecode(token);
            return '' + decodedToken.type;
        } else {
            return '';
        }
    }
}
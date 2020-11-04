import * as jwt from 'jsonwebtoken';
import { UserType } from '../models/user-type.model';

export class JwtUtility {
    static generateToken(id: string, name: string, type: UserType) {
        // Sign JWT Token
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            name: name,
            id: id,
            type: type
        }, process.env.JWT_SECRET);
    }

    static getJwtTokenFromHeader(authorizationHeader: string): string {
        return authorizationHeader.split(' ')[1];
    }

    static getUserIdFromToken(token: string): string {
        const decoded: any = jwt.decode(token);
        const userId: string = decoded.id;
        return userId;
    }

    static isValidToken(token: string): Promise<boolean> {
        return new Promise((resolve, _) => {
            jwt.verify(token, process.env.JWT_SECRET, (err) => {
                if (err) {
                    resolve(false);
                }
                resolve(true);
            });
        });
    }
}
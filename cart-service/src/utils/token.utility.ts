import * as jwt from 'jsonwebtoken';

export class JwtUtility {

  static getJwtTokenFromHeader(authorizationHeader: string): string {
    return authorizationHeader.split(' ')[1];
  }

  static getUserIdFromToken(token: string): string {
    const decoded: any = jwt.decode(token);
    const userId: string = decoded.id;
    return userId;
  }
}
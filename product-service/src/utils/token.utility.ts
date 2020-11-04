import { AuthService } from '../service/auth-service';

export class JwtUtility {
  public static async getUserIdFromToken(token: string): Promise<string> {
    if (token) {
      const authService = new AuthService();
      try {
        const {user} = await authService.validateToken(token);
        return user?.id;
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  public static getJwtTokenFromHeader(authorizationHeader: string): string {
    if (authorizationHeader) {
      return authorizationHeader.split(' ')[1];
    }
    return null;
  }
}
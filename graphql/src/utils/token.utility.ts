import { AuthenticationError } from 'apollo-server-express';
import fetch from 'node-fetch';
import { User } from '../schema/graphql-schema';

export class TokenUtility {
  public static async getUser(token: string): Promise<User> {
    try {
      const validateTokenResponse = await fetch(`${process.env.AUTH_SERVICE_URL}/auth-service/api/v1/validate-token`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).then(res => res.json());
      if (validateTokenResponse?.responseBody?.user?.id) {
        return validateTokenResponse.responseBody.user;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  }

  public static validateUser(user: User) {
    if (!(user?.id)) throw new AuthenticationError("Invalid token.");
    return;
  }
}
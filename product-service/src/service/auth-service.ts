import fetch from 'node-fetch';
import { Service } from 'typedi';
import { AppResponse } from '../utils/response.utility';

@Service('auth.service')
export class AuthService {
  url = process.env.AUTH_SERVICE_URL + '/auth-service';

  async validateToken(token: string): Promise<any> {
    return fetch(`${this.url}/api/v1/validate-token`, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      method: 'POST'
    })
      .then(res => res.json())
      .then((res: AppResponse<any>) => {
        if (res.isSuccess) {
          return res.responseBody;
        } else {
          throw res.responseBody;
        }
      })
  }
}
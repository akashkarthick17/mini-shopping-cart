
import { RESTDataSource } from 'apollo-datasource-rest';
import { Response } from '../../model/response.model';
import { LoginResponse, RegisterInput, RegisterResponse } from '../../schema/graphql-schema';
import { ResponseUtility } from '../../utils/response-utility';

export class AuthAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = `${process.env.AUTH_SERVICE_URL}/auth-service/`;
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    return this.post<Response<LoginResponse>>(`api/v1/login`, { email, password }).then(result => {
      return ResponseUtility.handleResponse<LoginResponse>(result);
    });
  }

  async register(registerInput: RegisterInput): Promise<RegisterResponse> {
    return this.post<Response<RegisterResponse>>(`api/v1/register`, { ...registerInput }).then(result => {
      return ResponseUtility.handleResponse<RegisterResponse>(result);
    });
  }

  async validateToken(token: string): Promise<LoginResponse> {
    return this.post<Response<LoginResponse>>('api/v1/validate-token', null, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(result => {
      return ResponseUtility.handleResponse<LoginResponse>(result);
    });
  }

}
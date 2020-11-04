import { ApolloError } from 'apollo-server-express';
import { ErrorResponse, Response } from '../model/response.model';

export class ResponseUtility {
  public static handleResponse<T>(response: any): T {
    console.log(response);
    if (!response.isSuccess) {
      ResponseUtility.handleError(response);
    }

    console.log('body', response.responseBody);

    return response.responseBody as T;
  }

  public static handleError(errorResponse: Response<ErrorResponse>) {
    const { responseBody: { errorCode, errorMessage } } = errorResponse;
    throw new ApolloError(errorMessage, errorCode);
  }
}
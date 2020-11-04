export interface Response<T> {
  isSuccess: boolean;
  responseBody: T;
}

export interface ErrorResponse {
  errorCode: string;
  errorMessage: string;
}
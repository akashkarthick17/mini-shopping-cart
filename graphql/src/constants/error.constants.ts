import { ApolloError } from 'apollo-server-express';

export class ErrorMessage {
  static get INTERNAL_SERVER_ERROR() {
    return new ApolloError('ERR_INTERNAL_SERVER', 'Internal server error.');
  }

  static get INVALID_CREDENTIALS() {
    return new ApolloError('INVALID_CREDENTIALS', 'Invalid username or password');
  }

  static get USER_EXISTS() {
    return new ApolloError('USER_EXISTS', 'User exists with this email');
  }

  static get INVALID_TOKEN() {
    return new ApolloError('INVALID_TOKEN', 'Invalid Token');
  }

  static get INVALID_BODY() {
    return new ApolloError('INVALID_BODY', 'Invalid Body');
  }

  static get USER_ALREADY_REGISTERED() {
    return new ApolloError('USER_ALREADY_REGISTERED', 'User already registered this tournament');
  }

  static get USER_NOT_REGISTERED() {
    return new ApolloError('USER_NOT_REGISTERED', 'User has not registered for this tournament');
  }

  static get INVALID_DETAILS() {
    return new ApolloError('INVALID_DETAILS', 'Invalid details');
  }

  static get FILE_LIMIT_EXCEEDED() {
    return new ApolloError('FILE_LIMIT_EXCEEDED', 'File limit exceeded');
  }

  static get INVALID_STATUS() {
    return new ApolloError('INVALID_STATUS', 'Invalid status');
  }

  static get INVALID_USER() {
    return new ApolloError('INVALID_USER', 'Invalid user');
  }

  static get ERROR_MAPPING_TABLE() {
    return new ApolloError('ERROR_MAPPING_TABLE', 'Error mapping table to object');
  }
}

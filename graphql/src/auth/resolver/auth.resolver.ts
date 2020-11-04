import { AuthAPI } from '../data-source/auth.data-source';

export class AuthResolver {

  public static Query() {
    return {
      validateToken: async (_root: any, _: any, {token, dataSources}) => {
        const authAPI: AuthAPI = dataSources.authAPI;
        return authAPI.validateToken(token);
      },
    }
  }

  public static Mutation() {
    return {
      login: async (_root: any, { email, password }: any, { dataSources }: any) => {
        const authAPI: AuthAPI = dataSources.authAPI;
        return authAPI.login(email, password);
      },
      register: async (_root: any, { registerInput }: any, { dataSources }: any) => {
        const authAPI: AuthAPI = dataSources.authAPI;
        return authAPI.register(registerInput);
      }
    }
  }
}
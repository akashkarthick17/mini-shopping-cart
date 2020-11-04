import { ApolloLink, HttpLink } from '@apollo/client';

export const authLink = new ApolloLink((operation, forward) => {

  operation.setContext(({ headers }: any) => {
    const accessToken = localStorage.getItem('accessToken');

    return {
      headers: {
        ...(accessToken && { authorization: 'Bearer ' + accessToken }),
        ...headers
      }
    }
  });

  return forward(operation);
});


export const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql',
})

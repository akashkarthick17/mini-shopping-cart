import { ApolloClient, from } from '@apollo/client';
import { authLink, httpLink } from './apollo-links';
import { cache } from './cache';

export const client = new ApolloClient({
  cache,
  link: from([authLink, httpLink]),
});
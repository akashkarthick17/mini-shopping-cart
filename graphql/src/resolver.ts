import { AddressResolver } from './address/resolver/address.resolver';
import { AuthResolver } from './auth/resolver/auth.resolver';
import { CartResolver } from './cart/resolver/cart.resolver';
import { OrderResolver } from './order/resolver/order.resolver';
import { ProductResolver } from './product/resolver/product.resolver';

export const Resolvers = {
  Query: {
    ...ProductResolver.Query(),
    ...AuthResolver.Query(),
    ...CartResolver.Query(),
    ...AddressResolver.Query(),
  },
  Mutation: {
    ...AuthResolver.Mutation(),
    ...CartResolver.Mutation(),
    ...AddressResolver.Mutation(),
    ...OrderResolver.Mutation(),
  }
};
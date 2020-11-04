import { makeVar } from '@apollo/client';
import { CartItem } from '../../graphql-schema/graphql-schema';

export const cartItemsVar = makeVar<CartItem[]>([]);
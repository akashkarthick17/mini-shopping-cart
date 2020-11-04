import { makeVar } from '@apollo/client';
import { User } from '../../graphql-schema/graphql-schema';

export const userInfoVar = makeVar<User>({});
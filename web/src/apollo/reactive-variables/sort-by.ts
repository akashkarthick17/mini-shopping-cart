import { makeVar } from '@apollo/client';
import { SortBy, SortOrder } from '../../graphql-schema/graphql-schema';

export const sortByVar = makeVar<{ sortBy: SortBy | null, sortOrder: SortOrder | null }>({ sortBy: null, sortOrder: null });
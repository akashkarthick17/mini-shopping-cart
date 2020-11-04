import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface AddressInput {
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  pinCode: Scalars['String'];
  city: Scalars['String'];
  landmark?: Maybe<Scalars['String']>;
  gpsCoordinates?: Maybe<Scalars['String']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  addAddress?: Maybe<AddAddressResponse>;
  updateAddress?: Maybe<UpdateAddressResponse>;
  deleteAddress?: Maybe<DeleteAddressResponse>;
  login?: Maybe<LoginResponse>;
  register?: Maybe<RegisterResponse>;
  addCartItem?: Maybe<AddCartItemResponse>;
  updateCartItem?: Maybe<UpdateCartItemResponse>;
  deleteCartItem?: Maybe<DeleteCartItemResponse>;
  deleteCartItemsOfUser?: Maybe<DeleteCartItemsOfUserResponse>;
  placeOrder?: Maybe<OrderResponse>;
}


export interface MutationAddAddressArgs {
  addressInput: AddressInput;
}


export interface MutationUpdateAddressArgs {
  id: Scalars['Int'];
  addressInput: AddressInput;
}


export interface MutationDeleteAddressArgs {
  id: Scalars['Int'];
}


export interface MutationLoginArgs {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}


export interface MutationRegisterArgs {
  registerInput?: Maybe<RegisterInput>;
}


export interface MutationAddCartItemArgs {
  productId: Scalars['Int'];
}


export interface MutationUpdateCartItemArgs {
  id?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
}


export interface MutationDeleteCartItemArgs {
  id: Scalars['Int'];
}


export interface MutationDeleteCartItemsOfUserArgs {
  userId: Scalars['String'];
}


export interface MutationPlaceOrderArgs {
  deliveryAddressId: Scalars['Int'];
  paymentTypeId: Scalars['Int'];
}

export interface Query {
  __typename?: 'Query';
  getAddressList?: Maybe<GetAddressListResponse>;
  getAddress?: Maybe<GetAddressResponse>;
  validateToken?: Maybe<ValidateTokenResponse>;
  getCartItems?: Maybe<GetCartItemsResponse>;
  getProduct?: Maybe<ProductResponse>;
  getProducts?: Maybe<ProductsResponse>;
}


export interface QueryGetAddressArgs {
  id: Scalars['Int'];
}


export interface QueryGetProductArgs {
  id: Scalars['Int'];
}


export interface QueryGetProductsArgs {
  productInput: ProductInput;
}

export interface Address {
  __typename?: 'Address';
  id: Scalars['Int'];
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  pinCode: Scalars['String'];
  city: Scalars['String'];
  landmark?: Maybe<Scalars['String']>;
  gpsCoordinates?: Maybe<Scalars['String']>;
}

export interface GetAddressListResponse {
  __typename?: 'GetAddressListResponse';
  addressList: Array<Maybe<Address>>;
}

export interface GetAddressResponse {
  __typename?: 'GetAddressResponse';
  address: Address;
}

export interface AddAddressResponse {
  __typename?: 'AddAddressResponse';
  address: Address;
}

export interface UpdateAddressResponse {
  __typename?: 'UpdateAddressResponse';
  address: Address;
}

export interface DeleteAddressResponse {
  __typename?: 'DeleteAddressResponse';
  message: Scalars['String'];
}

export enum UserType {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER'
}

export interface RegisterInput {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userType?: Maybe<UserType>;
}

export interface User {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userType?: Maybe<UserType>;
  createdAt?: Maybe<Scalars['String']>;
}

export interface LoginResponse {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
}

export interface RegisterResponse {
  __typename?: 'RegisterResponse';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
}

export interface ValidateTokenResponse {
  __typename?: 'ValidateTokenResponse';
  user?: Maybe<User>;
}

export interface CartItem {
  __typename?: 'CartItem';
  id: Scalars['Int'];
  product: Product;
  quantity: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
}

export interface GetCartItemsResponse {
  __typename?: 'GetCartItemsResponse';
  cartItems: Array<CartItem>;
  totalPages: Scalars['Int'];
}

export interface AddCartItemResponse {
  __typename?: 'AddCartItemResponse';
  cartItem: CartItem;
}

export interface UpdateCartItemResponse {
  __typename?: 'UpdateCartItemResponse';
  cartItem: CartItem;
}

export interface DeleteCartItemResponse {
  __typename?: 'DeleteCartItemResponse';
  message: Scalars['String'];
}

export interface DeleteCartItemsOfUserResponse {
  __typename?: 'DeleteCartItemsOfUserResponse';
  message: Scalars['String'];
}

export interface OrderResponse {
  __typename?: 'OrderResponse';
  message: Scalars['String'];
}

export enum SortBy {
  Price = 'PRICE',
  Rating = 'RATING'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export interface ProductInput {
  category?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
  searchTerm?: Maybe<Scalars['String']>;
  pageLimit: Scalars['Int'];
  pageOffset: Scalars['Int'];
  sortBy?: Maybe<SortBy>;
  sortOrder?: Maybe<SortOrder>;
}

export interface Product {
  __typename?: 'Product';
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  description: Scalars['String'];
  category: Scalars['String'];
  subCategory: Scalars['String'];
  features: Scalars['String'];
  discountPercentage: Scalars['Int'];
  offerPrice?: Maybe<Scalars['Int']>;
  imageUrl: Scalars['String'];
  brand: Scalars['String'];
  warehouseId: Scalars['Int'];
  stockCount: Scalars['Int'];
  createdAt: Scalars['String'];
  isAddedToCart: Scalars['Boolean'];
}

export interface ProductResponse {
  __typename?: 'ProductResponse';
  product?: Maybe<Product>;
}

export interface ProductsResponse {
  __typename?: 'ProductsResponse';
  products: Array<Maybe<Product>>;
  totalPages: Scalars['Int'];
}

export type AddAddressMutationVariables = Exact<{
  addressInput: AddressInput;
}>;


export type AddAddressMutation = (
  { __typename?: 'Mutation' }
  & { addAddress?: Maybe<(
    { __typename?: 'AddAddressResponse' }
    & { address: (
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'address1' | 'address2' | 'landmark' | 'pinCode' | 'city' | 'gpsCoordinates'>
    ) }
  )> }
);

export type AddCartItemMutationVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type AddCartItemMutation = (
  { __typename?: 'Mutation' }
  & { addCartItem?: Maybe<(
    { __typename?: 'AddCartItemResponse' }
    & { cartItem: (
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'quantity' | 'createdAt' | 'updatedAt'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'name' | 'price' | 'description' | 'discountPercentage' | 'offerPrice' | 'imageUrl' | 'brand' | 'stockCount'>
      ) }
    ) }
  )> }
);

export type DeleteAddressMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteAddressMutation = (
  { __typename?: 'Mutation' }
  & { deleteAddress?: Maybe<(
    { __typename?: 'DeleteAddressResponse' }
    & Pick<DeleteAddressResponse, 'message'>
  )> }
);

export type DeleteCartItemMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCartItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteCartItem?: Maybe<(
    { __typename?: 'DeleteCartItemResponse' }
    & Pick<DeleteCartItemResponse, 'message'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'phoneNumber' | 'userType' | 'createdAt'>
    )> }
  )> }
);

export type PlaceOrderMutationVariables = Exact<{
  deliveryAddressId: Scalars['Int'];
  paymentTypeId: Scalars['Int'];
}>;


export type PlaceOrderMutation = (
  { __typename?: 'Mutation' }
  & { placeOrder?: Maybe<(
    { __typename?: 'OrderResponse' }
    & Pick<OrderResponse, 'message'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'RegisterResponse' }
    & Pick<RegisterResponse, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'phoneNumber' | 'userType' | 'createdAt'>
    )> }
  )> }
);

export type UpdateAddressMutationVariables = Exact<{
  id: Scalars['Int'];
  addressInput: AddressInput;
}>;


export type UpdateAddressMutation = (
  { __typename?: 'Mutation' }
  & { updateAddress?: Maybe<(
    { __typename?: 'UpdateAddressResponse' }
    & { address: (
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'address1' | 'address2' | 'landmark' | 'pinCode' | 'city' | 'gpsCoordinates'>
    ) }
  )> }
);

export type UpdateCartItemMutationVariables = Exact<{
  id: Scalars['Int'];
  quantity: Scalars['Int'];
}>;


export type UpdateCartItemMutation = (
  { __typename?: 'Mutation' }
  & { updateCartItem?: Maybe<(
    { __typename?: 'UpdateCartItemResponse' }
    & { cartItem: (
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'quantity' | 'createdAt' | 'updatedAt'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'name' | 'price' | 'description' | 'discountPercentage' | 'offerPrice' | 'imageUrl' | 'brand' | 'stockCount'>
      ) }
    ) }
  )> }
);

export type GetAddressListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAddressListQuery = (
  { __typename?: 'Query' }
  & { getAddressList?: Maybe<(
    { __typename?: 'GetAddressListResponse' }
    & { addressList: Array<Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'address1' | 'address2' | 'landmark' | 'pinCode' | 'city' | 'gpsCoordinates'>
    )>> }
  )> }
);

export type GetAddressQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAddressQuery = (
  { __typename?: 'Query' }
  & { getAddress?: Maybe<(
    { __typename?: 'GetAddressResponse' }
    & { address: (
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'address1' | 'address2' | 'landmark' | 'pinCode' | 'city' | 'gpsCoordinates'>
    ) }
  )> }
);

export type GetCartItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartItemsQuery = (
  { __typename?: 'Query' }
  & { getCartItems?: Maybe<(
    { __typename?: 'GetCartItemsResponse' }
    & { cartItems: Array<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'quantity' | 'createdAt' | 'updatedAt'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'name' | 'price' | 'description' | 'discountPercentage' | 'offerPrice' | 'imageUrl' | 'brand' | 'stockCount'>
      ) }
    )> }
  )> }
);

export type GetProductQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { getProduct?: Maybe<(
    { __typename?: 'ProductResponse' }
    & { product?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'price' | 'description' | 'category' | 'subCategory' | 'features' | 'discountPercentage' | 'imageUrl' | 'brand' | 'warehouseId' | 'stockCount' | 'createdAt' | 'isAddedToCart'>
    )> }
  )> }
);

export type GetProductsQueryVariables = Exact<{
  productInput: ProductInput;
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { getProducts?: Maybe<(
    { __typename?: 'ProductsResponse' }
    & Pick<ProductsResponse, 'totalPages'>
    & { products: Array<Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'price' | 'description' | 'category' | 'subCategory' | 'features' | 'discountPercentage' | 'offerPrice' | 'imageUrl' | 'brand' | 'warehouseId' | 'stockCount' | 'createdAt' | 'isAddedToCart'>
    )>> }
  )> }
);

export type ValidateTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidateTokenQuery = (
  { __typename?: 'Query' }
  & { validateToken?: Maybe<(
    { __typename?: 'ValidateTokenResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'phoneNumber' | 'userType' | 'createdAt'>
    )> }
  )> }
);


export const AddAddressDocument = gql`
    mutation AddAddress($addressInput: AddressInput!) {
  addAddress(addressInput: $addressInput) {
    address {
      id
      address1
      address2
      landmark
      pinCode
      city
      gpsCoordinates
    }
  }
}
    `;
export type AddAddressMutationFn = Apollo.MutationFunction<AddAddressMutation, AddAddressMutationVariables>;

/**
 * __useAddAddressMutation__
 *
 * To run a mutation, you first call `useAddAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAddressMutation, { data, loading, error }] = useAddAddressMutation({
 *   variables: {
 *      addressInput: // value for 'addressInput'
 *   },
 * });
 */
export function useAddAddressMutation(baseOptions?: Apollo.MutationHookOptions<AddAddressMutation, AddAddressMutationVariables>) {
        return Apollo.useMutation<AddAddressMutation, AddAddressMutationVariables>(AddAddressDocument, baseOptions);
      }
export type AddAddressMutationHookResult = ReturnType<typeof useAddAddressMutation>;
export type AddAddressMutationResult = Apollo.MutationResult<AddAddressMutation>;
export type AddAddressMutationOptions = Apollo.BaseMutationOptions<AddAddressMutation, AddAddressMutationVariables>;
export const AddCartItemDocument = gql`
    mutation AddCartItem($productId: Int!) {
  addCartItem(productId: $productId) {
    cartItem {
      id
      quantity
      createdAt
      updatedAt
      product {
        id
        name
        price
        description
        discountPercentage
        offerPrice
        imageUrl
        brand
        stockCount
      }
    }
  }
}
    `;
export type AddCartItemMutationFn = Apollo.MutationFunction<AddCartItemMutation, AddCartItemMutationVariables>;

/**
 * __useAddCartItemMutation__
 *
 * To run a mutation, you first call `useAddCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCartItemMutation, { data, loading, error }] = useAddCartItemMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useAddCartItemMutation(baseOptions?: Apollo.MutationHookOptions<AddCartItemMutation, AddCartItemMutationVariables>) {
        return Apollo.useMutation<AddCartItemMutation, AddCartItemMutationVariables>(AddCartItemDocument, baseOptions);
      }
export type AddCartItemMutationHookResult = ReturnType<typeof useAddCartItemMutation>;
export type AddCartItemMutationResult = Apollo.MutationResult<AddCartItemMutation>;
export type AddCartItemMutationOptions = Apollo.BaseMutationOptions<AddCartItemMutation, AddCartItemMutationVariables>;
export const DeleteAddressDocument = gql`
    mutation DeleteAddress($id: Int!) {
  deleteAddress(id: $id) {
    message
  }
}
    `;
export type DeleteAddressMutationFn = Apollo.MutationFunction<DeleteAddressMutation, DeleteAddressMutationVariables>;

/**
 * __useDeleteAddressMutation__
 *
 * To run a mutation, you first call `useDeleteAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAddressMutation, { data, loading, error }] = useDeleteAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAddressMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAddressMutation, DeleteAddressMutationVariables>) {
        return Apollo.useMutation<DeleteAddressMutation, DeleteAddressMutationVariables>(DeleteAddressDocument, baseOptions);
      }
export type DeleteAddressMutationHookResult = ReturnType<typeof useDeleteAddressMutation>;
export type DeleteAddressMutationResult = Apollo.MutationResult<DeleteAddressMutation>;
export type DeleteAddressMutationOptions = Apollo.BaseMutationOptions<DeleteAddressMutation, DeleteAddressMutationVariables>;
export const DeleteCartItemDocument = gql`
    mutation DeleteCartItem($id: Int!) {
  deleteCartItem(id: $id) {
    message
  }
}
    `;
export type DeleteCartItemMutationFn = Apollo.MutationFunction<DeleteCartItemMutation, DeleteCartItemMutationVariables>;

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCartItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>) {
        return Apollo.useMutation<DeleteCartItemMutation, DeleteCartItemMutationVariables>(DeleteCartItemDocument, baseOptions);
      }
export type DeleteCartItemMutationHookResult = ReturnType<typeof useDeleteCartItemMutation>;
export type DeleteCartItemMutationResult = Apollo.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      email
      firstName
      lastName
      phoneNumber
      userType
      createdAt
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const PlaceOrderDocument = gql`
    mutation PlaceOrder($deliveryAddressId: Int!, $paymentTypeId: Int!) {
  placeOrder(deliveryAddressId: $deliveryAddressId, paymentTypeId: $paymentTypeId) {
    message
  }
}
    `;
export type PlaceOrderMutationFn = Apollo.MutationFunction<PlaceOrderMutation, PlaceOrderMutationVariables>;

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      deliveryAddressId: // value for 'deliveryAddressId'
 *      paymentTypeId: // value for 'paymentTypeId'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, baseOptions);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationResult = Apollo.MutationResult<PlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    user {
      id
      email
      firstName
      lastName
      phoneNumber
      userType
      createdAt
    }
    token
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateAddressDocument = gql`
    mutation UpdateAddress($id: Int!, $addressInput: AddressInput!) {
  updateAddress(id: $id, addressInput: $addressInput) {
    address {
      id
      address1
      address2
      landmark
      pinCode
      city
      gpsCoordinates
    }
  }
}
    `;
export type UpdateAddressMutationFn = Apollo.MutationFunction<UpdateAddressMutation, UpdateAddressMutationVariables>;

/**
 * __useUpdateAddressMutation__
 *
 * To run a mutation, you first call `useUpdateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAddressMutation, { data, loading, error }] = useUpdateAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      addressInput: // value for 'addressInput'
 *   },
 * });
 */
export function useUpdateAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAddressMutation, UpdateAddressMutationVariables>) {
        return Apollo.useMutation<UpdateAddressMutation, UpdateAddressMutationVariables>(UpdateAddressDocument, baseOptions);
      }
export type UpdateAddressMutationHookResult = ReturnType<typeof useUpdateAddressMutation>;
export type UpdateAddressMutationResult = Apollo.MutationResult<UpdateAddressMutation>;
export type UpdateAddressMutationOptions = Apollo.BaseMutationOptions<UpdateAddressMutation, UpdateAddressMutationVariables>;
export const UpdateCartItemDocument = gql`
    mutation UpdateCartItem($id: Int!, $quantity: Int!) {
  updateCartItem(id: $id, quantity: $quantity) {
    cartItem {
      id
      quantity
      createdAt
      updatedAt
      product {
        id
        name
        price
        description
        discountPercentage
        offerPrice
        imageUrl
        brand
        stockCount
      }
    }
  }
}
    `;
export type UpdateCartItemMutationFn = Apollo.MutationFunction<UpdateCartItemMutation, UpdateCartItemMutationVariables>;

/**
 * __useUpdateCartItemMutation__
 *
 * To run a mutation, you first call `useUpdateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartItemMutation, { data, loading, error }] = useUpdateCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useUpdateCartItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartItemMutation, UpdateCartItemMutationVariables>) {
        return Apollo.useMutation<UpdateCartItemMutation, UpdateCartItemMutationVariables>(UpdateCartItemDocument, baseOptions);
      }
export type UpdateCartItemMutationHookResult = ReturnType<typeof useUpdateCartItemMutation>;
export type UpdateCartItemMutationResult = Apollo.MutationResult<UpdateCartItemMutation>;
export type UpdateCartItemMutationOptions = Apollo.BaseMutationOptions<UpdateCartItemMutation, UpdateCartItemMutationVariables>;
export const GetAddressListDocument = gql`
    query GetAddressList {
  getAddressList {
    addressList {
      id
      address1
      address2
      landmark
      pinCode
      city
      gpsCoordinates
    }
  }
}
    `;

/**
 * __useGetAddressListQuery__
 *
 * To run a query within a React component, call `useGetAddressListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddressListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddressListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAddressListQuery(baseOptions?: Apollo.QueryHookOptions<GetAddressListQuery, GetAddressListQueryVariables>) {
        return Apollo.useQuery<GetAddressListQuery, GetAddressListQueryVariables>(GetAddressListDocument, baseOptions);
      }
export function useGetAddressListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAddressListQuery, GetAddressListQueryVariables>) {
          return Apollo.useLazyQuery<GetAddressListQuery, GetAddressListQueryVariables>(GetAddressListDocument, baseOptions);
        }
export type GetAddressListQueryHookResult = ReturnType<typeof useGetAddressListQuery>;
export type GetAddressListLazyQueryHookResult = ReturnType<typeof useGetAddressListLazyQuery>;
export type GetAddressListQueryResult = Apollo.QueryResult<GetAddressListQuery, GetAddressListQueryVariables>;
export const GetAddressDocument = gql`
    query GetAddress($id: Int!) {
  getAddress(id: $id) {
    address {
      id
      address1
      address2
      landmark
      pinCode
      city
      gpsCoordinates
    }
  }
}
    `;

/**
 * __useGetAddressQuery__
 *
 * To run a query within a React component, call `useGetAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddressQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAddressQuery(baseOptions?: Apollo.QueryHookOptions<GetAddressQuery, GetAddressQueryVariables>) {
        return Apollo.useQuery<GetAddressQuery, GetAddressQueryVariables>(GetAddressDocument, baseOptions);
      }
export function useGetAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAddressQuery, GetAddressQueryVariables>) {
          return Apollo.useLazyQuery<GetAddressQuery, GetAddressQueryVariables>(GetAddressDocument, baseOptions);
        }
export type GetAddressQueryHookResult = ReturnType<typeof useGetAddressQuery>;
export type GetAddressLazyQueryHookResult = ReturnType<typeof useGetAddressLazyQuery>;
export type GetAddressQueryResult = Apollo.QueryResult<GetAddressQuery, GetAddressQueryVariables>;
export const GetCartItemsDocument = gql`
    query GetCartItems {
  getCartItems {
    cartItems {
      id
      quantity
      createdAt
      updatedAt
      product {
        id
        name
        price
        description
        discountPercentage
        offerPrice
        imageUrl
        brand
        stockCount
      }
    }
  }
}
    `;

/**
 * __useGetCartItemsQuery__
 *
 * To run a query within a React component, call `useGetCartItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>) {
        return Apollo.useQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, baseOptions);
      }
export function useGetCartItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>) {
          return Apollo.useLazyQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, baseOptions);
        }
export type GetCartItemsQueryHookResult = ReturnType<typeof useGetCartItemsQuery>;
export type GetCartItemsLazyQueryHookResult = ReturnType<typeof useGetCartItemsLazyQuery>;
export type GetCartItemsQueryResult = Apollo.QueryResult<GetCartItemsQuery, GetCartItemsQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct($id: Int!) {
  getProduct(id: $id) {
    product {
      id
      name
      price
      description
      category
      subCategory
      features
      discountPercentage
      imageUrl
      brand
      warehouseId
      stockCount
      createdAt
      isAddedToCart
    }
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts($productInput: ProductInput!) {
  getProducts(productInput: $productInput) {
    products {
      id
      name
      price
      description
      category
      subCategory
      features
      discountPercentage
      offerPrice
      imageUrl
      brand
      warehouseId
      stockCount
      createdAt
      isAddedToCart
    }
    totalPages
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      productInput: // value for 'productInput'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const ValidateTokenDocument = gql`
    query ValidateToken {
  validateToken {
    user {
      id
      email
      firstName
      lastName
      phoneNumber
      userType
      createdAt
    }
  }
}
    `;

/**
 * __useValidateTokenQuery__
 *
 * To run a query within a React component, call `useValidateTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidateTokenQuery(baseOptions?: Apollo.QueryHookOptions<ValidateTokenQuery, ValidateTokenQueryVariables>) {
        return Apollo.useQuery<ValidateTokenQuery, ValidateTokenQueryVariables>(ValidateTokenDocument, baseOptions);
      }
export function useValidateTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateTokenQuery, ValidateTokenQueryVariables>) {
          return Apollo.useLazyQuery<ValidateTokenQuery, ValidateTokenQueryVariables>(ValidateTokenDocument, baseOptions);
        }
export type ValidateTokenQueryHookResult = ReturnType<typeof useValidateTokenQuery>;
export type ValidateTokenLazyQueryHookResult = ReturnType<typeof useValidateTokenLazyQuery>;
export type ValidateTokenQueryResult = Apollo.QueryResult<ValidateTokenQuery, ValidateTokenQueryVariables>;
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

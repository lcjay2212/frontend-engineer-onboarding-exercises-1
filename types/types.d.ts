export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** String representation of a Buffer ID. */
  Binary: any;
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
};

export type Account = Node & {
  __typename?: 'Account';
  id: Scalars['Binary'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  emailAddress: Scalars['EmailAddress'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AuthenticateInput = {
  emailAddress: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type Authentication = {
  __typename?: 'Authentication';
  token: Scalars['String'];
};

export type BinaryQueryOperatorInput = {
  eq?: Maybe<Scalars['Binary']>;
  ne?: Maybe<Scalars['Binary']>;
  in?: Maybe<Array<Scalars['Binary']>>;
  nin?: Maybe<Array<Scalars['Binary']>>;
};

export type CreateProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type DeleteProductInput = {
  id: Scalars['Binary'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * ### Description
   * Sign up a user and get an access token if successful.
   *
   * ### Error Codes
   * `BAD_USER_INPUT` - Email address already used.
   */
  signUp: Authentication;
  /**
   * ### Description
   * Authenticate a user to get an access token if credentials are valid.
   *
   * ### Error Codes
   * `BAD_USER_INPUT` - Invalid credentials.
   */
  authenticate: Authentication;
  /** Create a product. */
  createProduct: Product;
  /**
   * Update a product. User can only update own product.
   *
   * ## Error Codes
   * 	* `BAD_USER_INPUT` - Product not found.
   * 	* `BAD_USER_INPUT` - Cannot update product.
   */
  updateProduct: Product;
  /**
   * Delete a product. User can only delete own product.
   *
   * ## Error Codes
   * 		* `BAD_USER_INPUT` - Product not found.
   * 		* `BAD_USER_INPUT` - Cannot delete product.
   */
  deleteProduct: Scalars['Boolean'];
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};

export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};

export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};

export type Node = {
  id: Scalars['Binary'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Binary']>;
  endCursor?: Maybe<Scalars['Binary']>;
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['Binary'];
  name: Scalars['String'];
  description: Scalars['String'];
  owner: Account;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['Binary'];
  node: Product;
};

export type ProductSortInput = {
  name: Scalars['Int'];
};

export type ProductsFilter = {
  id?: Maybe<BinaryQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns an object given by its ID. */
  node: Node;
  /** Returns user's own information. */
  me: Account;
  /** Returns cursor-based list of products. */
  products: ProductConnection;
};

export type QueryNodeArgs = {
  id: Scalars['Binary'];
};

export type QueryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Binary']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Binary']>;
  filter?: Maybe<ProductsFilter>;
  sort?: Maybe<ProductSortInput>;
};

export type SignUpInput = {
  emailAddress: Scalars['EmailAddress'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  nin?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
};

export type UpdateProductBody = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateProductInput = {
  id: Scalars['Binary'];
  body: UpdateProductBody;
};

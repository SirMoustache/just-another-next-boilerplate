import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
};

export type CreateShopItemRequest = {
  title: Scalars['String'],
  description: Scalars['String'],
  metaTitle?: Maybe<Scalars['String']>,
  metaDescription?: Maybe<Scalars['String']>,
  previewImg?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  category?: Maybe<Scalars['String']>,
};


export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  revokeRefreshTokensForUser: Scalars['Boolean'],
  createUser: Scalars['Boolean'],
  logout: Scalars['Boolean'],
  login: LoginResponse,
  createShopItem: Scalars['Boolean'],
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int']
};


export type MutationCreateUserArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationCreateShopItemArgs = {
  input: CreateShopItemRequest
};

export type Query = {
   __typename?: 'Query',
  ping: Scalars['String'],
  secretQuery: Scalars['String'],
  secretAdminQuery: Scalars['String'],
  users: Array<User>,
  shopItems: Array<ShopItem>,
};

export type ShopItem = {
   __typename?: 'ShopItem',
  id: Scalars['ID'],
  title: Scalars['String'],
  description: Scalars['String'],
  metaTitle: Scalars['String'],
  metaDescription: Scalars['String'],
  previewImg: Scalars['String'],
  creationDate: Scalars['DateTime'],
  updateDate: Scalars['DateTime'],
  price: Scalars['Float'],
  category: Scalars['String'],
  tags: Array<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  roles: Array<Scalars['String']>,
};

export type PingQueryVariables = {};


export type PingQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'ping'>
);


export const PingDocument = gql`
    query PING {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PingQuery, PingQueryVariables>) {
        return ApolloReactHooks.useQuery<PingQuery, PingQueryVariables>(PingDocument, baseOptions);
      }
export function usePingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, baseOptions);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = ApolloReactCommon.QueryResult<PingQuery, PingQueryVariables>;
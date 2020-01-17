import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
import { ApolloContext } from "../types/context";
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Date: any;
  Time: any;
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Card = {
  __typename?: "Card";
  id: Scalars["ID"];
  number?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["DateTime"]>;
  updated?: Maybe<Scalars["DateTime"]>;
  categories?: Maybe<Array<Maybe<Category>>>;
};

export type CardInput = {
  number?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  categoryId?: Maybe<Scalars["ID"]>;
};

export type CardsUpdatedResponse = {
  __typename?: "CardsUpdatedResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  card: Card;
};

export type Category = {
  __typename?: "Category";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  parentId?: Maybe<Scalars["ID"]>;
  children?: Maybe<Array<Maybe<Category>>>;
  cards?: Maybe<Array<Maybe<Card>>>;
};

export type CategoryInput = {
  name?: Maybe<Scalars["String"]>;
};

export type CategoryUpdatedResponse = {
  __typename?: "CategoryUpdatedResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  category?: Maybe<Category>;
};

export type Mutation = {
  __typename?: "Mutation";
  addCard: CardsUpdatedResponse;
  updateCard: CardsUpdatedResponse;
  removeCard: CardsUpdatedResponse;
  addCategory: CategoryUpdatedResponse;
  updateCategory: CategoryUpdatedResponse;
  removeCategory: CategoryUpdatedResponse;
};

export type MutationAddCardArgs = {
  input?: Maybe<CardInput>;
};

export type MutationUpdateCardArgs = {
  id: Scalars["ID"];
  input?: Maybe<CardInput>;
};

export type MutationRemoveCardArgs = {
  id: Scalars["ID"];
};

export type MutationAddCategoryArgs = {
  input?: Maybe<CategoryInput>;
};

export type MutationUpdateCategoryArgs = {
  id: Scalars["ID"];
  input?: Maybe<CategoryInput>;
};

export type MutationRemoveCategoryArgs = {
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  cards?: Maybe<Array<Card>>;
  card?: Maybe<Card>;
  categories?: Maybe<Array<Category>>;
  category?: Maybe<Category>;
  me?: Maybe<User>;
};

export type QueryCardArgs = {
  id: Scalars["ID"];
};

export type QueryCategoryArgs = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["DateTime"]>;
  updated?: Maybe<Scalars["DateTime"]>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Card: ResolverTypeWrapper<Card>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  Category: ResolverTypeWrapper<Category>;
  User: ResolverTypeWrapper<User>;
  Mutation: ResolverTypeWrapper<{}>;
  CardInput: CardInput;
  CardsUpdatedResponse: ResolverTypeWrapper<CardsUpdatedResponse>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  CategoryInput: CategoryInput;
  CategoryUpdatedResponse: ResolverTypeWrapper<CategoryUpdatedResponse>;
  CacheControlScope: CacheControlScope;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  Time: ResolverTypeWrapper<Scalars["Time"]>;
  Upload: ResolverTypeWrapper<Scalars["Upload"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Card: Card;
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  String: Scalars["String"];
  DateTime: Scalars["DateTime"];
  Category: Category;
  User: User;
  Mutation: {};
  CardInput: CardInput;
  CardsUpdatedResponse: CardsUpdatedResponse;
  Boolean: Scalars["Boolean"];
  CategoryInput: CategoryInput;
  CategoryUpdatedResponse: CategoryUpdatedResponse;
  CacheControlScope: CacheControlScope;
  Date: Scalars["Date"];
  Time: Scalars["Time"];
  Upload: Scalars["Upload"];
}>;

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = ApolloContext,
  Args = {
    maxAge?: Maybe<Maybe<Scalars["Int"]>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CardResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Card"] = ResolversParentTypes["Card"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updated?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
    ParentType,
    ContextType
  >;
}>;

export type CardsUpdatedResponseResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["CardsUpdatedResponse"] = ResolversParentTypes["CardsUpdatedResponse"]
> = ResolversObject<{
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  card?: Resolver<ResolversTypes["Card"], ParentType, ContextType>;
}>;

export type CategoryResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  children?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
    ParentType,
    ContextType
  >;
  cards?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Card"]>>>,
    ParentType,
    ContextType
  >;
}>;

export type CategoryUpdatedResponseResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["CategoryUpdatedResponse"] = ResolversParentTypes["CategoryUpdatedResponse"]
> = ResolversObject<{
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  category?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type MutationResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  addCard?: Resolver<
    ResolversTypes["CardsUpdatedResponse"],
    ParentType,
    ContextType,
    MutationAddCardArgs
  >;
  updateCard?: Resolver<
    ResolversTypes["CardsUpdatedResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCardArgs, "id">
  >;
  removeCard?: Resolver<
    ResolversTypes["CardsUpdatedResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveCardArgs, "id">
  >;
  addCategory?: Resolver<
    ResolversTypes["CategoryUpdatedResponse"],
    ParentType,
    ContextType,
    MutationAddCategoryArgs
  >;
  updateCategory?: Resolver<
    ResolversTypes["CategoryUpdatedResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCategoryArgs, "id">
  >;
  removeCategory?: Resolver<
    ResolversTypes["CategoryUpdatedResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveCategoryArgs, "id">
  >;
}>;

export type QueryResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  cards?: Resolver<
    Maybe<Array<ResolversTypes["Card"]>>,
    ParentType,
    ContextType
  >;
  card?: Resolver<
    Maybe<ResolversTypes["Card"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCardArgs, "id">
  >;
  categories?: Resolver<
    Maybe<Array<ResolversTypes["Category"]>>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, "id">
  >;
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
}>;

export interface TimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Time"], any> {
  name: "Time";
}

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updated?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Card?: CardResolvers<ContextType>;
  CardsUpdatedResponse?: CardsUpdatedResponseResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryUpdatedResponse?: CategoryUpdatedResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = ApolloContext> = ResolversObject<{
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
}>;

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = ApolloContext
> = DirectiveResolvers<ContextType>;

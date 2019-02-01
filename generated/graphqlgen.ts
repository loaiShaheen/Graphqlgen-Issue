// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Game, User } from "./prisma-client";
type Context = any;

export type GameOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "genre_ASC"
  | "genre_DESC";
export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "name_ASC"
  | "name_DESC";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface GameWhereUniqueInput {
    id?: string | null;
  }
  export interface GameWhereInput {
    id?: string | null;
    id_not?: string | null;
    id_in?: string[] | null;
    id_not_in?: string[] | null;
    id_lt?: string | null;
    id_lte?: string | null;
    id_gt?: string | null;
    id_gte?: string | null;
    id_contains?: string | null;
    id_not_contains?: string | null;
    id_starts_with?: string | null;
    id_not_starts_with?: string | null;
    id_ends_with?: string | null;
    id_not_ends_with?: string | null;
    createdAt?: string | null;
    createdAt_not?: string | null;
    createdAt_in?: string[] | null;
    createdAt_not_in?: string[] | null;
    createdAt_lt?: string | null;
    createdAt_lte?: string | null;
    createdAt_gt?: string | null;
    createdAt_gte?: string | null;
    updatedAt?: string | null;
    updatedAt_not?: string | null;
    updatedAt_in?: string[] | null;
    updatedAt_not_in?: string[] | null;
    updatedAt_lt?: string | null;
    updatedAt_lte?: string | null;
    updatedAt_gt?: string | null;
    updatedAt_gte?: string | null;
    name?: string | null;
    name_not?: string | null;
    name_in?: string[] | null;
    name_not_in?: string[] | null;
    name_lt?: string | null;
    name_lte?: string | null;
    name_gt?: string | null;
    name_gte?: string | null;
    name_contains?: string | null;
    name_not_contains?: string | null;
    name_starts_with?: string | null;
    name_not_starts_with?: string | null;
    name_ends_with?: string | null;
    name_not_ends_with?: string | null;
    genre?: string | null;
    genre_not?: string | null;
    genre_in?: string[] | null;
    genre_not_in?: string[] | null;
    genre_lt?: string | null;
    genre_lte?: string | null;
    genre_gt?: string | null;
    genre_gte?: string | null;
    genre_contains?: string | null;
    genre_not_contains?: string | null;
    genre_starts_with?: string | null;
    genre_not_starts_with?: string | null;
    genre_ends_with?: string | null;
    genre_not_ends_with?: string | null;
    AND?: GameWhereInput[] | null;
    OR?: GameWhereInput[] | null;
    NOT?: GameWhereInput[] | null;
  }
  export interface UserWhereUniqueInput {
    id?: string | null;
  }
  export interface UserWhereInput {
    id?: string | null;
    id_not?: string | null;
    id_in?: string[] | null;
    id_not_in?: string[] | null;
    id_lt?: string | null;
    id_lte?: string | null;
    id_gt?: string | null;
    id_gte?: string | null;
    id_contains?: string | null;
    id_not_contains?: string | null;
    id_starts_with?: string | null;
    id_not_starts_with?: string | null;
    id_ends_with?: string | null;
    id_not_ends_with?: string | null;
    createdAt?: string | null;
    createdAt_not?: string | null;
    createdAt_in?: string[] | null;
    createdAt_not_in?: string[] | null;
    createdAt_lt?: string | null;
    createdAt_lte?: string | null;
    createdAt_gt?: string | null;
    createdAt_gte?: string | null;
    updatedAt?: string | null;
    updatedAt_not?: string | null;
    updatedAt_in?: string[] | null;
    updatedAt_not_in?: string[] | null;
    updatedAt_lt?: string | null;
    updatedAt_lte?: string | null;
    updatedAt_gt?: string | null;
    updatedAt_gte?: string | null;
    name?: string | null;
    name_not?: string | null;
    name_in?: string[] | null;
    name_not_in?: string[] | null;
    name_lt?: string | null;
    name_lte?: string | null;
    name_gt?: string | null;
    name_gte?: string | null;
    name_contains?: string | null;
    name_not_contains?: string | null;
    name_starts_with?: string | null;
    name_not_starts_with?: string | null;
    name_ends_with?: string | null;
    name_not_ends_with?: string | null;
    game?: GameWhereInput | null;
    AND?: UserWhereInput[] | null;
    OR?: UserWhereInput[] | null;
    NOT?: UserWhereInput[] | null;
  }

  export interface ArgsGame {
    where: GameWhereUniqueInput;
  }

  export interface ArgsGames {
    where?: GameWhereInput | null;
    orderBy?: GameOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export interface ArgsUser {
    where: UserWhereUniqueInput;
  }

  export interface ArgsUsers {
    where?: UserWhereInput | null;
    orderBy?: UserOrderByInput | null;
    skip?: number | null;
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
  }

  export type GameResolver = (
    parent: undefined,
    args: ArgsGame,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Game | null | Promise<Game | null>;

  export type GamesResolver = (
    parent: undefined,
    args: ArgsGames,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Array<Game | null> | Promise<Array<Game | null>>;

  export type UserResolver = (
    parent: undefined,
    args: ArgsUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type UsersResolver = (
    parent: undefined,
    args: ArgsUsers,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Array<User | null> | Promise<Array<User | null>>;

  export interface Type {
    game: (
      parent: undefined,
      args: ArgsGame,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Game | null | Promise<Game | null>;

    games: (
      parent: undefined,
      args: ArgsGames,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Array<Game | null> | Promise<Array<Game | null>>;

    user: (
      parent: undefined,
      args: ArgsUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    users: (
      parent: undefined,
      args: ArgsUsers,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Array<User | null> | Promise<Array<User | null>>;
  }
}

export namespace GameResolvers {
  export const defaultResolvers = {
    id: (parent: Game) => parent.id,
    createdAt: (parent: Game) => parent.createdAt,
    updatedAt: (parent: Game) => parent.updatedAt,
    name: (parent: Game) => (parent.name === undefined ? null : parent.name),
    genre: (parent: Game) => (parent.genre === undefined ? null : parent.genre)
  };

  export type IdResolver = (
    parent: Game,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver = (
    parent: Game,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: Game,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Game,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type GenreResolver = (
    parent: Game,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    id: (
      parent: Game,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    createdAt: (
      parent: Game,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    updatedAt: (
      parent: Game,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Game,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    genre: (
      parent: Game,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    createdAt: (parent: User) => parent.createdAt,
    updatedAt: (parent: User) => parent.updatedAt,
    name: (parent: User) => (parent.name === undefined ? null : parent.name)
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type GameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Game | null | Promise<Game | null>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    createdAt: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    updatedAt: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    game: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Game | null | Promise<Game | null>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface GameCreateInput {
    name?: string | null;
    genre?: string | null;
  }
  export interface GameUpdateInput {
    name?: string | null;
    genre?: string | null;
  }
  export interface GameWhereUniqueInput {
    id?: string | null;
  }
  export interface UserCreateInput {
    name?: string | null;
    game?: GameCreateOneInput | null;
  }
  export interface UserUpdateInput {
    name?: string | null;
    game?: GameUpdateOneInput | null;
  }
  export interface UserWhereUniqueInput {
    id?: string | null;
  }
  export interface GameCreateOneInput {
    create?: GameCreateInput | null;
    connect?: GameWhereUniqueInput | null;
  }
  export interface GameUpdateOneInput {
    create?: GameCreateInput | null;
    update?: GameUpdateDataInput | null;
    upsert?: GameUpsertNestedInput | null;
    delete?: boolean | null;
    disconnect?: boolean | null;
    connect?: GameWhereUniqueInput | null;
  }
  export interface GameUpdateDataInput {
    name?: string | null;
    genre?: string | null;
  }
  export interface GameUpsertNestedInput {
    update: GameUpdateDataInput;
    create: GameCreateInput;
  }

  export interface ArgsCreateGame {
    data: GameCreateInput;
  }

  export interface ArgsUpdateGame {
    data: GameUpdateInput;
    where: GameWhereUniqueInput;
  }

  export interface ArgsDeleteGame {
    where: GameWhereUniqueInput;
  }

  export interface ArgsCreateUser {
    data: UserCreateInput;
  }

  export interface ArgsUpdateUser {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }

  export interface ArgsDeleteUser {
    where: UserWhereUniqueInput;
  }

  export type CreateGameResolver = (
    parent: undefined,
    args: ArgsCreateGame,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Game | Promise<Game>;

  export type UpdateGameResolver = (
    parent: undefined,
    args: ArgsUpdateGame,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Game | null | Promise<Game | null>;

  export type DeleteGameResolver = (
    parent: undefined,
    args: ArgsDeleteGame,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Game | null | Promise<Game | null>;

  export type CreateUserResolver = (
    parent: undefined,
    args: ArgsCreateUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export type UpdateUserResolver = (
    parent: undefined,
    args: ArgsUpdateUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type DeleteUserResolver = (
    parent: undefined,
    args: ArgsDeleteUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export interface Type {
    createGame: (
      parent: undefined,
      args: ArgsCreateGame,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Game | Promise<Game>;

    updateGame: (
      parent: undefined,
      args: ArgsUpdateGame,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Game | null | Promise<Game | null>;

    deleteGame: (
      parent: undefined,
      args: ArgsDeleteGame,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Game | null | Promise<Game | null>;

    createUser: (
      parent: undefined,
      args: ArgsCreateUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;

    updateUser: (
      parent: undefined,
      args: ArgsUpdateUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    deleteUser: (
      parent: undefined,
      args: ArgsDeleteUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Game: GameResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
}

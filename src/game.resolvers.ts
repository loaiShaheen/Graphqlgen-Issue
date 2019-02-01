import { MutationResolvers, QueryResolvers } from "../generated/graphqlgen";
import { Context } from "./type";

const createGame: MutationResolvers.CreateGameResolver = (
  _,
  { data },
  { prisma }: Context
) => {
  return prisma.createGame(data); // does not give an error if the type does not have a relation
};

const updateGame: MutationResolvers.UpdateGameResolver = (
  _,
  args,
  { prisma }: Context
) => {
  return prisma.updateGame(args); // if divided into ({data: {...}, where: {...}}) will no longer give an error since  data doesn't give an error
};

const deleteGame: MutationResolvers.DeleteGameResolver = (
  _,
  { where },
  { prisma }: Context
) => {
  return prisma.deleteGame(where); // error can be resolved by replacing (where) with ({ id: where.id })
};

const game: QueryResolvers.GameResolver = (
  _,
  { where },
  { prisma }: Context
) => {
  return prisma.game(where); // error can be resolved by replacing (where) with ({ id: where.id })
};

const games: QueryResolvers.GamesResolver = (_, args, { prisma }: Context) => {
  return prisma.games(args); // no error
};

export default {
  Mutation: {
    createGame,
    updateGame,
    deleteGame
  },

  Query: {
    game,
    games
  }
};

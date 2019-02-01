import { MutationResolvers, QueryResolvers } from "../generated/graphqlgen";
import { Context } from "./type";

const createUser: MutationResolvers.CreateUserResolver = (
  _,
  { data },
  { prisma }: Context
) => {
  return prisma.createUser(data);
};

const updateUser: MutationResolvers.UpdateUserResolver = (
  _,
  args,
  { prisma }: Context
) => {
  return prisma.updateUser(args);
};

const deleteUser: MutationResolvers.DeleteUserResolver = (
  _,
  { where },
  { prisma }: Context
) => {
  return prisma.deleteUser(where); // error can be resolved by replacing (where) with ({ id: where.id })
};

const user: QueryResolvers.UserResolver = (
  _,
  { where },
  { prisma }: Context
) => {
  return prisma.user(where); // error can be resolved by replacing (where) with ({ id: where.id })
};

const users: QueryResolvers.UsersResolver = (_, args, { prisma }: Context) => {
  return prisma.users(args); // no error
};

export default {
  Mutation: {
    createUser,
    updateUser,
    deleteUser
  },

  Query: {
    user,
    users
  }
};

import { IResolvers } from 'apollo-server';
import { UserDTO } from '../../dtos';
import { UserRepository } from '../../repositories';

export const UserResolver: IResolvers = {

  UserEnum: {
    ADMIN: 1,
    USER: 2
  },

  Query: {
    async getUsers() {

      try {
        const users = await UserRepository.getUsers();
        return { error: false, message: 'Usuarios cargados', users };
      } catch (err) {
        return { error: true, message: err.messag };
      }
    }
  },
  Mutation: {
    async createUser(_, args) {

      try {
        const { input } = args;
        await UserDTO.create.validateAsync(input);
        await UserRepository.createUser(input)
        return { error: false, message: 'Usuario creado' }
      } catch (err) {
        return { error: true, message: err.message };
      }
    },

    async updateUser(_, args) {
      try {
        const input = args.input;
        const { _id, ...data } = input;
        await UserDTO.update.validateAsync(input);
        await UserRepository.updateUser(_id, data);
        return { error: false, message: 'Usuario actualizado' };
      } catch (err) {
        return { error: true, message: err.message };
      }
    },

    async deleteUser(_, args) {
      try {
        const { _id } = args.input;
        await UserRepository.deleteUser(_id);
        return { error: false, message: 'Usuario eliminado' };
      } catch (err) {
        return { error: true, message: err.message };
      }

    }
  }
};


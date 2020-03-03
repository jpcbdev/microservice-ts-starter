import { IResolvers } from 'apollo-server';
import { UserSchema } from '#root/schemas';
import { User } from '#root/dtos';
import { IUser } from 'src/interfaces';

const users: IUser[] = [{
  username: 'juan.car',
  password: '123456',
  age: 19,
  name: 'Juan'
}];

export const UserResolver: IResolvers = {
  Query: {
    async getUsers(_, args) {

      try {

        return { error: false, message: 'Usuarios cargados', users };
      } catch (err) {
        return { error: true, message: err.messag };
      }
    }
  },
  Mutation: {
    async createUser(_, args) {

      try {

        users.push({
          username: `username ${users.length + 1}`
          , password: '123456'
          , age: 29,
          name: 'name dos'
        });

        return { error: false, message: 'Usuario creado' }
      } catch (err) {
        return { error: true, message: err.message };
      }
    }
  }
};


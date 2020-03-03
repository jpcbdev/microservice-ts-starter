import { gql } from 'apollo-server';

export = gql`
  type Query {
    getUsers: GetUsersResponse
  }

  type Mutation {
    createUser(input: CreateUserInput): CreateUserResponse
  }
`;

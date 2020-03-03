import { gql } from 'apollo-server';

export = gql`
  type User {
    username: String!
    password:String!
    name: String!
    age: Int!
  }


  type GetUsersResponse {
    error: Boolean!
    message: String!
    users: [User!]!
  }

  type CreateUserResponse {
    error: Boolean!
    message: String!
  }

  input CreateUserInput {
    username: String!
    password:String!
    name: String!
    age: Int!
  }
`;

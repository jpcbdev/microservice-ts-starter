import { gql } from 'apollo-server';

export = gql`

  enum UserEnum {
    USER
    ADMIN
  }

  type User {
    name: String
    username: String
    password: String
    email: String
    type: UserEnum
  }

  type GetUsersResponse {
    error: Boolean!
    message: String!
    users: [User]
  }

  type CreateUserResponse {
    error: Boolean!
    message: String!
  }

  type UpdateUserResponse {
    error: Boolean!
    message: String!
  }

  type DeleteUserResponse {
    error: Boolean!
    message: String!
  }

  input CreateUserInput {
    name: String!
    username: String!
    password: String!
    email: String!
    type: UserEnum!
  }

  input UpdateUserInput {
    _id: ID!
    name: String
    username: String
    password: String
    email: String
    type: UserEnum
  }

  input DeleteUserInput {
    _id: ID!
  }
`;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    loginUser(
      email: String!, 
      password: String!
    ): Auth

    newUser(
      username: String!, 
      email: String!, 
      password: String!
    ): Auth

    saveBook(
      bookId: String!,
      authors:[String],
      description: String!,
      title: String!,
      image: String,
    ): User
    
    removeBook(
      bookId: String!
    ): User
  }
`;

module.exports = typeDefs;
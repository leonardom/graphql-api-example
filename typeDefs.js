const { gql } = require("apollo-server");
const typeDefs = gql`
  type Brewery {
    id: String!
    name: String!
    description: String!
    styles: [Style]
  }

  type Style {
    id: Int!
    name: String!
    beers: [Beer]
  }

  type Beer {
    id: String!
    name: String!
    price: Float!
  }

  type Query {
    breweries(id: String): [Brewery!]!
    styles(id: Int): [Style!]!
    greeting: String!
  }

  input CreateBeerInput {
    id: String!
    name: String!
    breweryId: String!
    styleId: Int!
    price: Float!
  }

  type Mutation {
    createBeer(input: CreateBeerInput!): Beer!
  }
`;
module.exports = {
  typeDefs,
};

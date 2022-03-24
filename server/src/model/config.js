const {gql} = require('apollo-server-express')

exports.typeDefs = gql`
  type Query {
    hello: String
  }
`

exports.resolvers = {
  Query: {
    hello: () => 'Hello World'
  }
}
const {ApolloServer, gql} = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')

function createApolloServer(typeDefs, resolvers, httpServer) {
  return new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })
}

module.exports = createApolloServer
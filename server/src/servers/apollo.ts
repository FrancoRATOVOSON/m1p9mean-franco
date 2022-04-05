import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { IResolvers, TypeSource } from '@graphql-tools/utils'
import http from 'http'

export default function createApolloServer(
  typeDefs: TypeSource,
  resolvers: IResolvers,
  httpServer: http.Server
) {
  return new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
}

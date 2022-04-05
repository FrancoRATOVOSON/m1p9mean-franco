import http from 'http'
import app from './servers/express'
import createApolloServer from './servers/apollo'
import { typeDefs, resolvers } from './model/config'

async function start() {
  const httpServer = http.createServer(app)
  const server = createApolloServer(typeDefs, resolvers, httpServer)

  await server.start()
  server.applyMiddleware({ app })
  // eslint-disable-next-line no-promise-executor-return
  await new Promise<void>(resolve => httpServer.listen({ port: 8080 }, resolve))
  // TODO: don't forget to remove 'console.log' before send in prod
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:8080
    -for REST at /api
    -for GraphQL et /graphql
  `)
}

start()

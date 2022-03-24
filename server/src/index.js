const http = require('http')
const app = require("./servers/express")
const createApolloServer = require("./servers/apollo")
const { typeDefs, resolvers } = require('./model/config')

async function start() {
  const httpServer = http.createServer(app)
  const server = createApolloServer(typeDefs, resolvers, httpServer)

  await server.start()
  server.applyMiddleware({app})
  await new Promise(resolve => httpServer.listen({ port:8080 }, resolve))
  console.log(`🚀 Server ready at http://localhost:8080
    -for REST at /api
    -for GraphQL et /graphql
  `)
}

start()
import { makeSchema } from 'nexus'
import { join } from 'path'
import { GQLDate } from '../utils/types'
import {
  Menu,
  Restaurant,
  Commande,
  Etat,
  Client,
  Query,
  MenuReturnedType,
  Mutation,
} from './models'

const schema = makeSchema({
  types: [
    GQLDate,
    Etat,
    Restaurant,
    Menu,
    MenuReturnedType,
    Commande,
    Client,
    Query,
    Mutation,
  ],
  outputs: {
    typegen: join(__dirname, 'nexus-typegen.ts'),
    schema: join(__dirname, '../../', 'schema.graphql'),
  },
})

export default schema

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
  CommandeDetails,
  Livreur,
  CommandeDetailsInput,
} from './models'

const schema = makeSchema({
  types: [
    GQLDate,
    Etat,
    Restaurant,
    Menu,
    MenuReturnedType,
    Livreur,
    CommandeDetails,
    Commande,
    CommandeDetailsInput,
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

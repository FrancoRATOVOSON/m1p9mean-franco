import { makeSchema } from 'nexus'
import { join } from 'path'
import { GQLDate } from '../utils/types'
import { Menu, Restaurant, RestaurantQuery, Commande, Etat } from './models'

const schema = makeSchema({
  types: [GQLDate, Etat, Restaurant, RestaurantQuery, Menu, Commande],
  outputs: {
    typegen: join(__dirname, 'nexus-typegen.ts'),
    schema: join(__dirname, '../../', 'schema.graphql'),
  },
})

export default schema

import { extendType, objectType } from 'nexus'
import { IGraphqlContext } from '../../utils/types'

export const Restaurant = objectType({
  name: 'Restaurant',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('nom')
    t.string('adresse')
  },
})

export const RestaurantQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('restaurants', {
      type: 'Restaurant',
      resolve: (_: any, _args: any, ctx: IGraphqlContext) =>
        ctx.prisma.restaurant.findMany({
          select: { id: true, nom: true, adresse: true, compte: false },
        }),
    })
  },
})

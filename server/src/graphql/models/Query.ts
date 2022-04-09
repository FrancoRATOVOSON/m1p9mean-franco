import { extendType } from 'nexus'
import { IGraphqlContext } from '../../utils/types'

const Query = extendType({
  type: 'Query',

  definition(t) {
    t.list.field('restaurants', {
      type: 'Restaurant',
      resolve: (_: any, _args: any, ctx: IGraphqlContext) =>
        ctx.prisma.restaurant.findMany({
          select: { id: true, nom: true, adresse: true, compte: false },
        }),
    })

    t.list.field('menus', {
      type: 'MenuReturnedType',
      resolve(_: any, _args: any, ctx: IGraphqlContext) {
        return ctx.prisma.menu.findMany({
          select: {
            id: true,
            nom: true,
            prix: true,
            restaurant: { select: { id: true, nom: true, adresse: true } },
          },
        })
      },
    })
  },
})

export default Query

import { extendType, nonNull, stringArg } from 'nexus'
import { verifyRestaurantAuthorization } from '../../utils/functions'
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

    t.list.field('menusByRestaurant', {
      type: 'Menu',
      args: { restaurantId: nonNull(stringArg()) },
      resolve(_, args, ctx: IGraphqlContext) {
        const { restaurantId } = args
        return ctx.prisma.menu.findMany({
          where: { restaurantId },
          select: {
            id: true,
            nom: true,
            prix: true,
            restaurant: { select: { id: true, nom: true, adresse: true } },
          },
        })
      },
    })

    t.list.field('myMenus', {
      type: 'Menu',
      resolve(_, _args, ctx: IGraphqlContext) {
        const { prisma, token } = ctx
        const restaurantId = verifyRestaurantAuthorization(token)
        return prisma.menu.findMany({
          where: { restaurantId },
          select: {
            id: true,
            nom: true,
            prix: true,
            visible: true,
          },
        })
      },
    })
  },
})

export default Query

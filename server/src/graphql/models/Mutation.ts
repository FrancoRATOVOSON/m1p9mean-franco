import { booleanArg, extendType, intArg, list, nonNull, stringArg } from 'nexus'
import { createCommande, updateCommande } from '../../database/commandes'
import { menuSelection } from '../../utils/consts'
import {
  verifyClientAndRestaurantAuthorization,
  verifyClientAuthorization,
  verifyLivreurAuthorization,
  verifyRestaurantAuthorization,
} from '../../utils/functions'
import { IGraphqlContext } from '../../utils/types'
import { CommandeDetailsInput } from './Commande'

const Mutation = extendType({
  type: 'Mutation',

  definition(t) {
    t.field('createMenu', {
      type: 'Menu',
      args: {
        nom: nonNull(stringArg()),
        prix: nonNull(intArg()),
        visible: booleanArg(),
      },
      resolve(_, args, ctx: IGraphqlContext) {
        const { token, prisma } = ctx
        const restaurantId = verifyRestaurantAuthorization(token)
        const { nom, prix, visible } = args
        return prisma.menu.create({
          data: { nom, prix, visible: visible || true, restaurantId },
          select: menuSelection,
        })
      },
    })

    t.field('changeMenuVisibility', {
      type: 'Menu',
      args: { menuId: nonNull(stringArg()), visible: nonNull(booleanArg()) },
      resolve(_, args, ctx: IGraphqlContext) {
        const { token, prisma } = ctx
        verifyRestaurantAuthorization(token)
        const { menuId, visible } = args
        return prisma.menu.update({
          where: { id: menuId },
          data: { visible },
          select: menuSelection,
        })
      },
    })

    t.field('updateMenu', {
      type: 'Menu',
      args: { menuId: nonNull(stringArg()), nom: stringArg(), prix: intArg() },
      resolve(_, args, ctx: IGraphqlContext) {
        const { token, prisma } = ctx
        verifyRestaurantAuthorization(token)
        const { menuId, ...rest } = args
        const data = {
          nom: rest.nom !== null ? rest.nom : undefined,
          prix: rest.prix !== null ? rest.prix : undefined,
        }
        return prisma.menu.update({
          where: { id: menuId },
          data,
          select: menuSelection,
        })
      },
    })

    t.field('deleteMenu', {
      type: 'Menu',
      args: { menuId: nonNull(stringArg()) },
      resolve(_, args, ctx: IGraphqlContext) {
        const { token, prisma } = ctx
        verifyRestaurantAuthorization(token)
        const { menuId } = args
        return prisma.menu.delete({
          where: { id: menuId },
          select: menuSelection,
        })
      },
    })

    t.field('makeOrder', {
      type: 'Commande',
      args: { menus: nonNull(list(nonNull(CommandeDetailsInput))) },
      async resolve(_, args, ctx: IGraphqlContext) {
        const { token, prisma } = ctx
        const clientId = verifyClientAuthorization(token)
        const details = args.menus.map(menu => ({
          menuId: menu.menuId,
          quantite: menu.quantite || 1,
        }))
        return createCommande(prisma, {
          date: new Date(),
          details,
          client: { connect: { id: clientId } },
        })
      },
    })

    t.field('cancelOrder', {
      type: 'Commande',
      args: { commandeId: nonNull(stringArg()) },
      async resolve(_, args, ctx: IGraphqlContext) {
        const { token, prisma } = ctx
        verifyClientAndRestaurantAuthorization(token)
        return updateCommande(prisma, args.commandeId, { etat: 'ANNULEE' })
      },
    })

    t.field('deliverOrder', {
      type: 'Commande',
      args: { commandeId: nonNull(stringArg()) },
      async resolve(_, args, ctx: IGraphqlContext) {
        const { token, prisma } = ctx
        verifyLivreurAuthorization(token)
        return updateCommande(prisma, args.commandeId, { etat: 'LIVREE' })
      },
    })
  },
})

export default Mutation

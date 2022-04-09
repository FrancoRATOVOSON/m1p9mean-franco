import { booleanArg, extendType, intArg, list, nonNull, stringArg } from 'nexus'
import {
  verifyClientAuthorization,
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
          select: {
            id: true,
            nom: true,
            prix: true,
            visible: true,
          },
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
          select: {
            id: true,
            nom: true,
            prix: true,
            visible: true,
          },
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
          select: {
            id: true,
            nom: true,
            prix: true,
            visible: true,
          },
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
          select: {
            id: true,
            nom: true,
            prix: true,
            visible: true,
          },
        })
      },
    })

    t.field('makeOrder', {
      type: 'Commande',
      args: { menus: nonNull(list(nonNull(CommandeDetailsInput))) },
      // Used <any> type here because typescript causes errors
      // on promise returned value
      async resolve(_, args, ctx: IGraphqlContext): Promise<any> {
        const { token, prisma } = ctx
        const clientId = verifyClientAuthorization(token)
        const details = args.menus.map(menu => ({
          menuId: menu.menuId,
          quantite: menu.quantite || 1,
        }))
        const createdCommande = await prisma.commande.create({
          data: { date: new Date(), details, clientId },
          select: {
            id: true,
            date: true,
            client: {
              select: {
                id: true,
                nom: true,
                prenom: true,
                adresse: true,
              },
            },
            etat: true,
            livreur: {
              select: {
                id: true,
                nom: true,
                prenom: true,
              },
            },
            details: true,
          },
        })
        const { details: commandeDetails, ...commande } = createdCommande
        return {
          ...commande,
          details: commandeDetails.map(async detail => ({
            menu: await prisma.menu.findUnique({
              where: { id: detail.menuId },
              select: {
                id: true,
                nom: true,
                prix: true,
                restaurant: {
                  select: { id: true, nom: true, adresse: true },
                },
              },
            }),
            quantite: detail.quantite,
          })),
        }
      },
    })
  },
})

export default Mutation

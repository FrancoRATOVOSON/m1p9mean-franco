import { booleanArg, extendType, intArg, list, nonNull, stringArg } from 'nexus'
import { UnauthorizedActionError } from '../../utils/errors'
import { tokenVerify } from '../../utils/tools'
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
        if (token.length === 0) throw new UnauthorizedActionError()
        const decodedToken = tokenVerify(token)
        if (
          !decodedToken['userType'] ||
          decodedToken['userType'].toUpperCase() !== 'RESTAURANT'
        )
          throw new UnauthorizedActionError()
        const { nom, prix, visible } = args
        const restaurantId = decodedToken['userID']
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
        if (token.length === 0) throw new UnauthorizedActionError()
        const decodedToken = tokenVerify(token)
        if (
          !decodedToken['userType'] ||
          decodedToken['userType'].toUpperCase() !== 'RESTAURANT'
        )
          throw new UnauthorizedActionError()
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
        if (token.length === 0) throw new UnauthorizedActionError()
        const decodedToken = tokenVerify(token)
        if (
          !decodedToken['userType'] ||
          decodedToken['userType'].toUpperCase() !== 'RESTAURANT'
        )
          throw new UnauthorizedActionError()
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
        if (token.length === 0) throw new UnauthorizedActionError()
        const decodedToken = tokenVerify(token)
        if (
          !decodedToken['userType'] ||
          decodedToken['userType'].toUpperCase() !== 'RESTAURANT'
        )
          throw new UnauthorizedActionError()
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
        if (token.length === 0) throw new UnauthorizedActionError()
        const decodedToken = tokenVerify(token)
        if (
          !decodedToken['userType'] ||
          decodedToken['userType'].toUpperCase() !== 'CLIENT'
        )
          throw new UnauthorizedActionError()
        const clientId = decodedToken['userID']
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
        const menuList = commandeDetails.map(async detail => ({
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
        }))
        return {
          ...commande,
          details: menuList,
        }
      },
    })
  },
})

export default Mutation

/*
Le type
'Promise<{ menu: { id: string; nom: string; prix: number; restaurant: { adresse: string; id: string; nom: string; }; } | null; quantite: number; }>' n'a aucune propriété en commun avec le type
'{ menu?: { id?: string; nom?: string; prix?: number; restaurant?: { adresse?: string; id: string; nom: string; }; } | null; quantite?: number; }'
*/

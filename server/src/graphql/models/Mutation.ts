import { booleanArg, extendType, intArg, nonNull, stringArg } from 'nexus'
import { UnauthorizedActionError } from '../../utils/errors'
import { tokenVerify } from '../../utils/tools'
import { IGraphqlContext } from '../../utils/types'

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
        const { menuId, ...arg } = args
        const data = {
          nom: arg.nom !== null ? arg.nom : undefined,
          prix: arg.prix !== null ? arg.prix : undefined,
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
  },
})

export default Mutation

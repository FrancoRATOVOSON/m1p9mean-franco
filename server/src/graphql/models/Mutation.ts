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
          data: { nom, prix, visible: visible || false, restaurantId },
          select: {
            id: true,
            nom: true,
            prix: true,
            visible: true,
            restaurant: { select: { id: true, nom: true, adresse: true } },
          },
        })
      },
    })
  },
})

export default Mutation

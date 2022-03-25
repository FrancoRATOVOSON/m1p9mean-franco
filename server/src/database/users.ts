import { PrismaClient } from '@prisma/client'
import { IAdmin, IClient, ILivreur, IRestaurant } from '../utils/interfaces'

export async function createAdmin(admin: IAdmin) {
  const prismaClient = new PrismaClient()
  return prismaClient.admin.create({
    data: {
      ...admin,
    },
  })
}

export async function createClient(client: IClient) {
  const prismaClient = new PrismaClient()
  return prismaClient.client.create({
    data: {
      ...client,
    },
  })
}
export async function createLivreur(livreur: ILivreur) {
  const prismaClient = new PrismaClient()
  return prismaClient.admin.create({
    data: {
      ...livreur,
    },
  })
}
export async function createRestaurant(restaurant: IRestaurant) {
  const prismaClient = new PrismaClient()
  return prismaClient.admin.create({
    data: {
      ...restaurant,
    },
  })
}

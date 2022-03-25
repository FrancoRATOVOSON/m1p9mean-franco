import { PrismaClient } from '@prisma/client'
import { IAdmin, IClient, ILivreur, IRestaurant } from '../utils/interfaces'

export async function createAdmin(admin: IAdmin) {
  const prismaClient = new PrismaClient()
  const { email, motDePasse, ...adminData } = admin
  return prismaClient.admin.create({
    data: {
      ...adminData,
      compte: {
        email,
        motDePasse,
      },
    },
  })
}

export async function createClient(client: IClient) {
  const prismaClient = new PrismaClient()
  const { email, motDePasse, ...clientData } = client
  return prismaClient.client.create({
    data: {
      ...clientData,
      compte: {
        email,
        motDePasse,
      },
    },
  })
}
export async function createLivreur(livreur: ILivreur) {
  const prismaClient = new PrismaClient()
  const { email, motDePasse, ...livreurData } = livreur
  return prismaClient.admin.create({
    data: {
      ...livreurData,
      compte: {
        email,
        motDePasse,
      },
    },
  })
}
export async function createRestaurant(restaurant: IRestaurant) {
  const prismaClient = new PrismaClient()
  const { email, motDePasse, ...restaurantData } = restaurant
  return prismaClient.admin.create({
    data: {
      ...restaurantData,
      compte: {
        email,
        motDePasse,
      },
    },
  })
}

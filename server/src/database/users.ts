import { PrismaClient } from '@prisma/client'
import { IAdmin, IClient, ILivreur, IRestaurant } from '../utils/interfaces'
import { hashPassword } from '../utils/tools'

export async function createAdmin(admin: IAdmin) {
  const prismaClient = new PrismaClient()
  const { email, motDePasse, ...adminData } = admin
  return prismaClient.admin.create({
    data: {
      ...adminData,
      compte: {
        email,
        motDePasse: await hashPassword(motDePasse),
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
        motDePasse: await hashPassword(motDePasse),
      },
    },
  })
}
export async function createLivreur(livreur: ILivreur) {
  const prismaClient = new PrismaClient()
  const { email, motDePasse, ...livreurData } = livreur
  return prismaClient.livreur.create({
    data: {
      ...livreurData,
      compte: {
        email,
        motDePasse: await hashPassword(motDePasse),
      },
    },
  })
}
export async function createRestaurant(restaurant: IRestaurant) {
  const prismaClient = new PrismaClient()
  const { email, motDePasse, ...restaurantData } = restaurant
  return prismaClient.restaurant.create({
    data: {
      ...restaurantData,
      compte: {
        email,
        motDePasse: await hashPassword(motDePasse),
      },
    },
  })
}

export async function isAdminExists(email: string) {
  const prismaClient = new PrismaClient()
  const results = await prismaClient.admin.findRaw({
    filter: {
      'compte.email': email,
    },
  })
  return results.length > 0
}

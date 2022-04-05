import { IAdmin, IClient, ILivreur, IRestaurant } from '../utils/interfaces'
import { hashPassword } from '../utils/tools'
import prisma from './prisma'

export async function createAdmin(admin: IAdmin) {
  const { email, motDePasse, ...adminData } = admin
  return prisma.admin.create({
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
  const { email, motDePasse, ...clientData } = client
  return prisma.client.create({
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
  const { email, motDePasse, ...livreurData } = livreur
  return prisma.livreur.create({
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
  const { email, motDePasse, ...restaurantData } = restaurant
  return prisma.restaurant.create({
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
  const results = await prisma.admin.findRaw({
    filter: {
      'compte.email': email,
    },
  })
  return results.length > 0
}

export async function isClientExists(email: string) {
  const results = await prisma.client.findRaw({
    filter: {
      'compte.email': email,
    },
  })
  return results.length > 0
}

export async function isLivreurExists(email: string) {
  const results = await prisma.livreur.findRaw({
    filter: {
      'compte.email': email,
    },
  })
  return results.length > 0
}

export async function isRestaurantExists(email: string) {
  const results = await prisma.restaurant.findRaw({
    filter: {
      'compte.email': email,
    },
  })
  return results.length > 0
}

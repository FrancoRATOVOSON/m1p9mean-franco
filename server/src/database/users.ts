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

export async function findAdminByMail(email: string) {
  const admin = await prisma.admin.findFirst({
    where: {
      compte: {
        is: {
          email,
        },
      },
    },
  })
  return admin
}

export async function findClientByMail(email: string) {
  const client = await prisma.client.findFirst({
    where: {
      compte: {
        is: {
          email,
        },
      },
    },
  })
  return client
}

export async function findLivreurByMail(email: string) {
  const livreur = await prisma.livreur.findFirst({
    where: {
      compte: {
        is: {
          email,
        },
      },
    },
  })
  return livreur
}

export async function findRestaurantByMail(email: string) {
  const restaurant = await prisma.restaurant.findFirst({
    where: {
      compte: {
        is: {
          email,
        },
      },
    },
  })
  return restaurant
}

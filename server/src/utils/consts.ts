import { Prisma } from '.prisma/client'
import prisma from '../database/prisma'
import { IPrismaContext } from './types'

export const BCRYPT_SALT_ROUND = 10

export enum EUserType {
  ADMIN,
  CLIENT,
  RESTAURANT,
  LIVREUR,
}

export const context: IPrismaContext = {
  prisma,
}

export const commandeSelection: Prisma.CommandeSelect = {
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
}

export const menuSelection: Prisma.MenuSelect = {
  id: true,
  nom: true,
  prix: true,
  visible: true,
}

export const menuRestaurantSelection: Prisma.MenuSelect = {
  id: true,
  nom: true,
  prix: true,
  restaurant: { select: { id: true, nom: true, adresse: true } },
}

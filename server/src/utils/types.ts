import {
  Admin,
  Client,
  Compte,
  Livreur,
  PrismaClient,
  Restaurant,
} from '@prisma/client'
import { asNexusMethod } from 'nexus'
import { GraphQLDate } from 'graphql-scalars'

interface ICompte extends Compte {}

export interface IAdmin extends Omit<Admin, 'id'>, ICompte {
  id?: string
}

export interface IClient extends Omit<Client, 'id'>, ICompte {
  id?: string
}

export interface ILivreur extends Omit<Livreur, 'id'>, ICompte {
  id?: string
}

export interface IRestaurant extends Omit<Restaurant, 'id'>, ICompte {
  id?: string
}

export interface IUserType
  extends Partial<IAdmin>,
    Partial<IClient>,
    Partial<ILivreur>,
    Partial<IRestaurant> {
  email: string
  motDePasse: string
}

export interface IPrismaContext {
  prisma: PrismaClient
}

export interface IGraphqlContext {
  token: string
  prisma: PrismaClient
}

export const GQLDate = asNexusMethod(GraphQLDate, 'date')

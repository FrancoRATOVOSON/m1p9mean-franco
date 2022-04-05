import { Admin, Client, Compte, Livreur, Restaurant } from '@prisma/client'

export const def = ''

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

import { Admin, Client, Livreur, Restaurant } from '@prisma/client'

export const def = ''

export interface IAdmin extends Omit<Admin, 'id'> {
  id?: string
}

export interface IClient extends Omit<Client, 'id'> {
  id?: string
}

export interface ILivreur extends Omit<Livreur, 'id'> {
  id?: string
}

export interface IRestaurant extends Omit<Restaurant, 'id'> {
  id?: string
}

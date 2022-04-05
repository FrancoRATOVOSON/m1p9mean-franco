import { IAdmin, IClient, ILivreur, IRestaurant } from './interfaces'

export const def = ''

export interface UserType
  extends Partial<IAdmin>,
    Partial<IClient>,
    Partial<ILivreur>,
    Partial<IRestaurant> {
  email: string
  motDePasse: string
}

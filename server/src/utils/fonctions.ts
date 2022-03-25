import { UserTypeError } from './errors'
import {
  toAdminData,
  toClientData,
  toLivreurData,
  toRestaurantData,
} from './toUserData'
import {
  createAdmin,
  createClient,
  createLivreur,
  createRestaurant,
} from '../database/users'

export const def = ''

export async function createUser(
  userType: string,
  userData: any
): Promise<any> {
  switch (userType.toUpperCase()) {
    case 'ADMIN':
      return createAdmin(toAdminData(userData))
    case 'CLIENT':
      return createClient(toClientData(userData))
    case 'LIVREUR':
      return createLivreur(toLivreurData(userData))
    case 'RESTAURANT':
      return createRestaurant(toRestaurantData(userData))
    default:
      throw new UserTypeError()
  }
}

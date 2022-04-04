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
  isAdminExists,
} from '../database/users'

export function returnUser(userType: string, user: any) {
  const userToReturn: any = {}
  const { id, email } = user
  switch (userType.toUpperCase()) {
    case 'ADMIN':
      break
    case 'LIVREUR':
    case 'CLIENT':
      userToReturn.nom = user.nom
      userToReturn.prenom = user.prenom
      break
    case 'RESTAURANT':
      userToReturn.nom = user.nom
      break
    default:
      throw new UserTypeError(userType)
  }
  return { id, email, ...userToReturn }
}

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
      throw new UserTypeError(userType)
  }
}

export async function isUserExists(
  userType: string,
  userMail: string
): Promise<boolean> {
  switch (userType.toUpperCase()) {
    case 'ADMIN':
      return isAdminExists(userMail) /*
    case 'CLIENT':
      return isClientExists(toClientData(userData))
    case 'LIVREUR':
      return isLivreurExists(toLivreurData(userData))
    case 'RESTAURANT':
      return isRestaurantExists(toRestaurantData(userData)) */
    default:
      throw new UserTypeError(userType)
  }
}
/*
export async function logUser(userType: string, userData: any): Promise<any> {
  switch (userType.toUpperCase()) {
    case 'ADMIN':
      return logAdmin(toAdminData(userData))
    case 'CLIENT':
      return logClient(toClientData(userData))
    case 'LIVREUR':
      return logLivreur(toLivreurData(userData))
    case 'RESTAURANT':
      return logRestaurant(toRestaurantData(userData))
    default:
      throw new UserTypeError(userType)
  }
}
*/

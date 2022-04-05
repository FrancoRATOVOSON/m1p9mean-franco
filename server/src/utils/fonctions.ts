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
  findAdminByMail,
  findClientByMail,
  findLivreurByMail,
  findRestaurantByMail,
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
  userMail
): Promise<boolean> {
  const result = await findUserByMail(userType, userMail)
  return result
}

export async function findUserByMail(
  userType: string,
  userMail: string
): Promise<any> {
  switch (userType.toUpperCase()) {
    case 'ADMIN':
      return findAdminByMail(userMail)
    case 'CLIENT':
      return findClientByMail(userMail)
    case 'LIVREUR':
      return findLivreurByMail(userMail)
    case 'RESTAURANT':
      return findRestaurantByMail(userMail)
    default:
      throw new UserTypeError(userType)
  }
}

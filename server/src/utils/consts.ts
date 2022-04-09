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

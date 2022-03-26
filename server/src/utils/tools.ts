import bcrypt from 'bcrypt'
import { BCRYPT_SALT_ROUND } from './consts'

export const def = ''

export async function hashPassword(password: string) {
  try {
    return bcrypt.hash(password, BCRYPT_SALT_ROUND)
  } catch (error) {
    throw new Error(`Bcrypt encryption error:\n${error}`)
  }
}

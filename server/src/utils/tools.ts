import bcrypt from 'bcrypt'
import { BCRYPT_SALT_ROUND } from './consts'

export async function hashPassword(password: string) {
  try {
    return bcrypt.hash(password, BCRYPT_SALT_ROUND)
  } catch (error) {
    throw new Error(`Bcrypt encryption error:\n${error}`)
  }
}

export async function comparePassword(input: string, encrypted: string) {
  try {
    return bcrypt.compare(input, encrypted)
  } catch (error) {
    throw new Error(`Bcrypt compare error:\n${error}`)
  }
}

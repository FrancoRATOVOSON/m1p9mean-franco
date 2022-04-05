import { Response, Request, RequestHandler } from 'express'
import {
  createUser,
  returnUser,
  isUserExists,
  findUserByMail,
} from '../utils/fonctions'
import { comparePassword } from '../utils/tools'

export const signup: RequestHandler = async (req: Request, res: Response) => {
  const { userType } = req.params
  try {
    if (await isUserExists(userType, req.body.email)) {
      res.status(400).send('User already exists')
      return
    }
    const createdUser = await createUser(userType, req.body)
    res.status(200).send(returnUser(userType, createdUser))
  } catch (error) {
    // TODO: don't forget to remove 'console.error' before send in prod
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(400).send(error)
  }
}

export const login: RequestHandler = async (req: Request, res: Response) => {
  const { userType } = req.params
  const { email, motDePasse } = req.body
  try {
    const userFound = await findUserByMail(userType, email)
    if (!userFound) {
      res.status(400).send("User doesn't exists")
      return
    }
    if (await comparePassword(motDePasse, userFound.compte.motDePasse))
      res.status(200).send(returnUser(userType, userFound))
    else res.status(400).send('Wrong Password')
  } catch (error) {
    // TODO: don't forget to remove 'console.error' before send in prod
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(400).send('Something went wrong, please verify your request')
  }
}

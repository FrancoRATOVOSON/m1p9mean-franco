import { Response, Request, RequestHandler } from 'express'
import { createUser } from '../utils/fonctions'

export const def = ''

export const login: RequestHandler = async (req: Request, res: Response) => {
  const { userType } = req.params
  try {
    const createdUser = await createUser(userType, req.body)
    res.status(200).send(createdUser as Omit<typeof createdUser, 'password'>)
  } catch (error) {
    res.status(400).send(error)
  }
}

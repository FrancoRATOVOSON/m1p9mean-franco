import { Response, Request, RequestHandler } from 'express'
import { createUser, returnUser } from '../utils/fonctions'

export const def = ''

export const login: RequestHandler = async (req: Request, res: Response) => {
  const { userType } = req.params
  try {
    const createdUser = await createUser(userType, req.body)
    res.status(200).send(returnUser(userType, createdUser))
  } catch (error) {
    // TODO: don't forget to remove 'console.error' before send in prod
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(400).send(error)
  }
}

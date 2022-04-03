import { Response, Request, RequestHandler } from 'express'
import {
  createUser,
  returnUser,
  // logUser,
  isUserExists,
} from '../utils/fonctions'

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
  try {
    if (!(await isUserExists(userType, req.body.email))) {
      res.status(404).send('User not found')
      return
    }
    res.status(200).send('Connected')
    // const loggedUser = await logUser(userType, req.body)
    // res.status(200).send(returnUser(userType, loggedUser))
  } catch (error) {
    // TODO: don't forget to remove 'console.error' before send in prod
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(400).send(error)
  }
}

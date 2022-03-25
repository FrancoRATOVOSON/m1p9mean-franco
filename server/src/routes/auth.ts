import express from 'express'
import { login } from '../controllers/auth'

const router = express.Router()

router.post('/signup/:userType', login)

export default router

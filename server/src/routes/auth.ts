import express from 'express'
import { login, signup } from '../controllers/auth'

const router = express.Router()

router.post('/signup/:userType', signup)
router.get('/login/:userType', login)

export default router

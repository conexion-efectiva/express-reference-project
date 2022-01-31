import { Router } from 'express'
import passport from 'passport'
const router = Router()
import AuthController from '../controllers/AuthController.js'
import validateBody from '../middleware/validateBody.js'
import { authLoginSchema } from '../validators/authValidator.js'
import { userSchema } from '../validators/userValidator.js'

router.post(
  '/signup',
  validateBody(userSchema),
  passport.authenticate('signup', { session: false }),
  (req, res) => {
    AuthController.getInstance().signup(req, res)
  }
)

router.post('/login', validateBody(authLoginSchema), (req, res, next) => {
  AuthController.getInstance().login(req, res, next)
})

export default router

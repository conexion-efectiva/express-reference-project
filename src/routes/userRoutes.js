import { Router } from 'express'
const router = Router()
import UserController from '../controllers/UserController.js'
import validateBody from '../middleware/validateBody.js'
import { userSchema } from '../validators/userValidator.js'

router.get('/user', (req, res) =>
  UserController.getInstance().getList(req, res)
)
router.get('/user/:id', (req, res) =>
  UserController.getInstance().getOne(req, res)
)
router.post('/user', validateBody(userSchema), (req, res) => UserController.getInstance().post(req, res))
router.put('/user/:id', validateBody(userSchema), (req, res) => UserController.getInstance().put(req, res))
router.delete('/user', (req, res) =>
  UserController.getInstance().delete(req, res)
)

export default router
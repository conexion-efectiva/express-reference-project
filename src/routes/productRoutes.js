import { Router } from 'express'
const router = Router()
import ProductController from '../controllers/ProductController.js'
import validateBody from '../middleware/validateBody.js'
import { productSchema } from '../validators/productValidator.js'
router.get('/products', (req, res) =>
  ProductController.getInstance().getList(req, res)
)
router.get('/products/:id', (req, res) =>
  ProductController.getInstance().getOne(req, res)
)
router.post('/products', validateBody(productSchema), (req, res) => ProductController.getInstance().post(req, res))
router.put('/products/:id', validateBody(productSchema), (req, res) => ProductController.getInstance().put(req, res))
router.delete('/products/:id', (req, res) =>
  ProductController.getInstance().delete(req, res)
)

export default router
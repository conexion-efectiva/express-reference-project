const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const validateBody = require('../middleware/validateBody')
const { productSchema, productUpdateSchema } = require('../validators/productValidator')
router.get('/products', (req, res) =>
  ProductController.getInstance().getList(req, res)
)
router.get('/products/:id', (req, res) =>
  ProductController.getInstance().getOne(req, res)
)
router.post('/products', validateBody(productSchema), (req, res) => ProductController.getInstance().post(req, res))
router.put('/products', validateBody(productUpdateSchema), (req, res) => ProductController.getInstance().put(req, res))
router.delete('/products/:id', (req, res) =>
  ProductController.getInstance().delete(req, res)
)

module.exports = router
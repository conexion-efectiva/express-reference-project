const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/product', (req, res) =>
  ProductController.getInstance().getList(req, res)
)
router.get('/product/:id', (req, res) =>
  ProductController.getInstance().getOne(req, res)
)
router.post('/product', (req, res) => ProductController.getInstance().post(req, res))
router.put('/product', (req, res) => ProductController.getInstance().put(req, res))
router.delete('/product', (req, res) =>
  ProductController.getInstance().delete(req, res)
)

module.exports = router
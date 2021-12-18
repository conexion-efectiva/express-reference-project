const ProductService = require('../services/ProductService')
/**
 * @type ProductController
 */
let instance = null

class ProductController {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async getList(req, res) {
    const products = await ProductService.getInstance().list()
    res.json(products)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async getOne(req, res) {
    const product = await ProductService.getInstance().get(req.params.id)
    res.json(product)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async post(req, res) {
    const product = ProductService.getInstance().insert(req.body)
    res.json(product)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async put(req, res) {
    const existentProduct = await ProductService.getInstance().get(req.body.id)
    if(existentProduct == null) {
      res.status(404).send({message: 'Not found'})
    }
    const product = ProductService.getInstance().update(req.body)
    res.json(product)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async delete(req, res) {
    const existentProduct = await ProductService.getInstance().get(req.body.id)

    if(existentProduct == null) {
      res.status(404).send({message: 'Not found'})
    }

    await ProductService.getInstance().delete(req.params.id)

    res.json(existentProduct)
  }

  static getInstance() {
    if(instance == null) {
      instance = new ProductController()
    }

    return instance
  }
}

module.exports = ProductController

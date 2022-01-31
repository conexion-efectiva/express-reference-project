import ProductService from '../services/ProductService.js'
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
    const product = await ProductService.getInstance().insert(req.body)
    res.json(product)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async put(req, res) {
    const existentProduct = await ProductService.getInstance().get(req.body._id)
    if(existentProduct == null) {
      res.status(404).json({message: 'Not found'})
    }
    const product = await ProductService.getInstance().update(req.body)
    res.json(product)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async delete(req, res) {
    const existentProduct = await ProductService.getInstance().get(req.params.id)

    if(existentProduct == null) {
      res.status(404).json({message: 'Not found'})
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

export default ProductController

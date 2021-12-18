const ProductModel = require('../persistence/ProductModel')
/**
 * @type ProductService
 */
let instance = null

class ProductService {
  async insert(product) {
    return await ProductModel.create(product)
  }

  async get(id) {
    return await ProductModel.findOne({ _id: id })
  }

  async list() {
    return await ProductModel.find()
  }

  async delete(id) {
    return await ProductModel.deleteOne({ _id: id })
  }

  static getInstance() {
    if (instance == null) {
      instance = new ProductService()
    }

    return instance
  }
}

module.exports = ProductService

const ProductModel = require('../persistence/ProductModel')
/**
 * @type ProductService
 */
let instance = null

class ProductService {
  async insert(product) {
    const result = await ProductModel.create(product)
    return result.toObject()
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

  async update(product) {
    await ProductModel.updateOne({_id: product._id}, product)
    return product
  }

  static getInstance() {
    if (instance == null) {
      instance = new ProductService()
    }

    return instance
  }
}

module.exports = ProductService

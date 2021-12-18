const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  thumbnail: String,
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel
import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  thumbnail: String,
})

const ProductModel = mongoose.model('products', productSchema)

export default ProductModel
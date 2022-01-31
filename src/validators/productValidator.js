import joi from 'joi'

const productSchema = joi.object({
  title: joi.string().required(),
  price: joi.number().required(),
  thumbnail: joi.string().required()
})

const productUpdateSchema = joi.object({
  title: joi.string().required(),
  price: joi.number().required(),
  thumbnail: joi.string().required(),
  _id: joi.string().required()
})

export { productSchema, productUpdateSchema }
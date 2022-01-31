import express, { json } from 'express'
const app = express()
const port = process.env.PORT || 8080
import initializeAuthentication from './auth/initializeAuthentication.js'
import jwtAuthenticationMiddleware from './middleware/jwtAuthenticationMiddleware.js'

app.use(json())

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

main()
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => console.log(err))

async function main() {
  await mongoose.connect(process.env.DB_MONGO)
}

initializeAuthentication()

app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', jwtAuthenticationMiddleware, productRoutes)

app.listen(port, () => {
  console.log('App listening on port ', port)
})

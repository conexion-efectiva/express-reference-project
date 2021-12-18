const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

const mongoose = require('mongoose')
require('dotenv').config()

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(process.env.DB_MONGO)
}

app.use('/api', productRoutes)
app.use('/api', userRoutes)

app.listen(() => {
  console.log('App listening on port ', port)
})

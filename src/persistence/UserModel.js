import mongoose from 'mongoose'
import { hash as _hash, compare as _compare } from 'bcrypt'

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

userSchema.pre(
  'save',
  async function(next) {
    const user = this
    const hash = await _hash(user.password, 10)
    this.password = hash
    next()
  }
)

userSchema.methods.isValidPassword = async function(password) {
  const user = this 
  const compare = await _compare(password, user.password)
  return compare
}

const UserModel = mongoose.model('users', userSchema)

export default UserModel

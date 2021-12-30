const express = require('express')
const passport = require('passport')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  (req, res) => {
    AuthController.getInstance().signup(req, res)
  }
)


router.post('/login', (req, res, next) => {
  AuthController.getInstance().login(req, res, next)
}
)

module.exports = router
const { body } = require('express-validator')

const loginValidator = [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be at least 6 characters').isLength({
    min: 6
  })
]

const registerValidator = [
  ...loginValidator,
  body('fullname', 'Enter a fullname').exists().notEmpty()
]

module.exports = {
  loginValidator,
  registerValidator
}

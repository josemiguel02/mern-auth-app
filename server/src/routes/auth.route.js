const { Router } = require('express')
const { login, register } = require('../controllers/auth.controller')
const { loginValidator, registerValidator } = require('../util/validations')

const router = Router()

router.post('/login', loginValidator, login)
router.post('/register', registerValidator, register)

module.exports = router

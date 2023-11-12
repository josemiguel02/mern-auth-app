const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult, matchedData } = require('express-validator')

const JWT_SECRET_TOKEN = 'my_secret@jwt*token'

const register = async (req, res) => {
  const result = validationResult(req)

  if (!result.isEmpty()) {
    return res.status(401).json({ fields_errors: result.mapped() })
  }

  const { fullname, email, password } = matchedData(req)

  try {
    const userFound = await User.findOne({ where: { email } })

    if (userFound) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, bcrypt.genSaltSync(12))

    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword
    })

    const userData = {
      id: newUser.id,
      fullname: newUser.fullname,
      email: newUser.email
    }

    const jwtToken = jwt.sign(userData, JWT_SECRET_TOKEN)

    return res.json({
      msg: 'Register successfully',
      token: jwtToken,
      user: userData
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const login = async (req, res) => {
  const result = validationResult(req)

  if (!result.isEmpty()) {
    return res.status(401).json({ fields_errors: result.mapped() })
  }

  const { email, password } = matchedData(req)

  try {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res
        .status(404)
        .json({ error: 'User not registered with this email' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res
        .status(401)
        .json({ error: 'Email and/or password is incorrect' })
    }

    const userData = {
      id: user.id,
      fullname: user.fullname,
      email: user.email
    }

    const jwtToken = jwt.sign(userData, JWT_SECRET_TOKEN)

    return res.json({
      msg: 'Login successfully',
      token: jwtToken,
      user: userData
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  register,
  login
}

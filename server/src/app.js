const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const CookieParser = require('cookie-parser')
const AuthRoutes = require('./routes/auth.route')

const app = express()

// Config
app.set('port', process.env.PORT ?? 8080)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Middlewares
app.use(cors())
app.use(logger('dev'))
app.use(CookieParser())

// Routes
app.use('/auth', AuthRoutes)

module.exports = app

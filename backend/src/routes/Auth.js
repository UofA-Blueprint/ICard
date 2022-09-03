const express = require('express')
const authController = require('../controllers/Auth')
const { checkAuthenticated, verifyApiKey } = require('../services/verifyToken')

const router = express.Router()

// There are two middlewware for authentication:
// 1. verifyApikey - verifies the api key before accessing the route
// 2. checkAuthenticated - verifies the google session token
router.post('/login', verifyApiKey, checkAuthenticated, authController.login) // login

module.exports = router

const express = require('express')
const authController = require('../controllers/Auth')
const { checkAuthenticated } = require('../services/verifyToken')

const router = express.Router()

router.post('/login', checkAuthenticated, authController.login) // login

module.exports = router

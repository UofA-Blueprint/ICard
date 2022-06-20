const express = require('express')
const authController = require('../controllers/Auth')

const router = express.Router()

router.post('/login', authController.login) // login

module.exports = router

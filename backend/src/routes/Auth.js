const express = require('express')
const authController = require('../controllers/Auth')

const router = express.Router()

router.post('/login', authController.login) // login
router.post('/register', authController.register) // register

module.exports = router

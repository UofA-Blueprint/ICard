const express = require('express')
const studentController = require('../controllers/Students')
const { verifyApiKey } = require('../authentication/verifyToken')

const router = express.Router()

// verifyToken is a middleware that checks if the user is authenticated and has the correct api-key
router.get('/:studentId', verifyApiKey, studentController.getStudent) // get a student by id
router.post('/', verifyApiKey, studentController.create) // create a new student
router.put('/:studentId', verifyApiKey, studentController.update) // update a student
router.delete('/:studentId', verifyApiKey, studentController.delete) // delete a student

module.exports = router

const express = require('express')
const studentController = require('../controllers/Students')
const verifyToken = require('../authentication/verifyToken')

const router = express.Router()

// verifyToken is a middleware that checks if the user is authenticated
router.get('/:studentId', verifyToken, studentController.getStudent) // get a student by id
router.post('/', verifyToken, studentController.create) // create a new student
router.put('/:studentId', verifyToken, studentController.update) // update a student
router.delete('/:studentId', verifyToken, studentController.delete) // delete a student

module.exports = router

const express = require('express')
const studentController = require('../controllers/Students')
const { verifyApiKey } = require('../services/verifyToken')

const router = express.Router()

// verifyToken is a middleware that checks if the user is authenticated and has the correct api-key
router.get('/all', verifyApiKey, studentController.getAll) // get all students
router.get('/:studentId', verifyApiKey, studentController.getStudent) // get a student by id
router.get('/icard/:icard_number', verifyApiKey, studentController.getStudentByIcard) // get a student by icard number
router.post('/', verifyApiKey, studentController.create) // create a new student
router.put('/:studentId', verifyApiKey, studentController.update) // update a student
router.delete('/:studentId', verifyApiKey, studentController.delete) // delete a student

module.exports = router

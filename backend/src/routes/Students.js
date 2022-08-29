const express = require('express')
const studentController = require('../controllers/Students')
const { verifyApiKey } = require('../services/verifyToken')

const router = express.Router()

// verifyToken is a middleware that checks if the user is authenticated and has the correct api-key

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - icard_number
 *         - active
 *         - isaf_paying_status
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         icard_number:
 *           type: string
 *         active:
 *           type: boolean
 *         isaf_paying_status:
 *           type: boolean
 */

/**
 * @swagger
 * tags:
 *   name: Student
 */

/**
 * @swagger
 * /students/all:
 *   get:
 *     summary: Returns the list of all the Students
 *     tags: [Student]
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         schema:
 *            type: string
 *         required: true
 *     responses:
 *       200:
 *         description: The list of the Students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */

router.get('/all', verifyApiKey, studentController.getAll) // get all students

/**
 * @swagger
 * /students/{studentId}:
 *      get:
 *          summary: Get the student by id
 *          tags: [Student]
 *          parameters:
 *              - in: header
 *                name: x-api-key
 *                schema:
 *                  type: string
 *                required: true
 *              - in: path
 *                name: studentId
 *                schema:
 *                  type: string
 *                required: true
 *          responses:
 *              200:
 *                  description: the student by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Student'
 *              404:
 *                  description: The student was not found
 */
router.get('/:studentId', verifyApiKey, studentController.getStudent) // get a student by id

/**
 * @swagger
 * /students/icard/{icard_number}:
 *      get:
 *          summary: Get the student by icard number
 *          tags: [Student]
 *          parameters:
 *              - in: header
 *                name: x-api-key
 *                schema:
 *                  type: string
 *                required: true
 *              - in: path
 *                name: icard_number
 *                schema:
 *                  type: string
 *                required: true
 *          responses:
 *              200:
 *                  description: the student by icard number
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Student'
 *              404:
 *                  description: The student was not found
 */
router.get(
    '/icard/:icard_number',
    verifyApiKey,
    studentController.getStudentByIcard
) // get a student by icard number

/**
 * @swagger
 * /students/:
 *      post:
 *          summary: Create a new Student
 *          tags: [Student]
 *          parameters:
 *              - in: header
 *                name: x-api-key
 *                schema:
 *                  type: string
 *                required: true
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Student'
 *      responses:
 *          201:
 *              description: The Student was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Student'
 *          500:
 *              description: Some server error
 */
// router.post('/', verifyApiKey, studentController.create) // create a new student

/**
 * @swagger
 * /students/{studentId}:
 *      put:
 *          summary: Update the student by id
 *          tags: [Student]
 *          parameters:
 *              - in: header
 *                name: x-api-key
 *                schema:
 *                  type: string
 *                required: true
 *              - in: path
 *                name: studentId
 *                schema:
 *                      type: string
 *                required: true
 *                description: the student id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Student'
 *          responses:
 *              200:
 *                  description: The Student was updated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Student'
 *              404:
 *                  description: The Student was not found
 *              500:
 *                  description: Some Server Error
 *
 */
// router.put('/:studentId', verifyApiKey, studentController.update) // update a student

/**
 * @swagger
 * /students/{studentId}:
 *      delete:
 *          summary: Delete the student by id
 *          tags: [Student]
 *          parameters:
 *              - in: header
 *                name: x-api-key
 *                schema:
 *                  type: string
 *                required: true
 *              - in: path
 *                name: studentId
 *                schema:
 *                  type: string
 *                required: true
 *          responses:
 *              200:
 *                  description: The Student was deleted
 *              404:
 *                  description: The student was not found
 */
// router.delete('/:studentId', verifyApiKey, studentController.delete) // delete a student

module.exports = router

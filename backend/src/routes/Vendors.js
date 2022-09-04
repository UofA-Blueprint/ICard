const express = require('express')
const { verifyApiKey } = require('../services/verifyToken')
const vendorController = require('../controllers/Vendor')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Vendor:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - description
 *         - phone_number
 *       properties:
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         description:
 *           type: string
 *         phone_number:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Vendor
 */

/**
 * @swagger
 * /vendors/:
 *   get:
 *     summary: Returns the list of all the Vendors
 *     tags: [Vendor]
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         schema:
 *            type: string
 *         required: true
 *     responses:
 *       200:
 *         description: The list of the Vendors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vendor'
 */
router.get('/', verifyApiKey, vendorController.getAll)

/**
 * @swagger
 * /vendors/:
 *      post:
 *          summary: Create a new Vendor
 *          tags: [Vendor]
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
 *                          $ref: '#/components/schemas/Vendor'
 *      responses:
 *          201:
 *              description: The Vendor was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Vendor'
 *          500:
 *              description: Some server error
 */
// router.post('/', verifyApiKey, vendorController.create)

/**
 * @swagger
 * /vendors/{id}:
 *      put:
 *          summary: Update the Vendor by id
 *          tags: [Vendor]
 *          parameters:
 *              - in: header
 *                name: x-api-key
 *                schema:
 *                  type: string
 *                required: true
 *              - in: path
 *                name: id
 *                schema:
 *                      type: string
 *                required: true
 *                description: the Vendor id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Vendor'
 *          responses:
 *              200:
 *                  description: The Vendor was updated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Vendor'
 *              404:
 *                  description: The Vendor was not found
 *              500:
 *                  description: Some Server Error
 *
 */
// router.put('/:vendorId', verifyApiKey, vendorController.update)

/**
 * @swagger
 * /vendors/{id}:
 *      delete:
 *          summary: Delete the student by id
 *          tags: [Vendor]
 *          parameters:
 *              - in: header
 *                name: x-api-key
 *                schema:
 *                  type: string
 *                required: true
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *          responses:
 *              200:
 *                  description: The Vendor was deleted
 *              404:
 *                  description: The student was not found
 */
// router.delete('/:vendorId', verifyApiKey, vendorController.delete)

module.exports = router

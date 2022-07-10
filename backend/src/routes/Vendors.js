const express = require('express')
const { verifyApiKey } = require('../services/verifyToken')
const vendorController = require('../controllers/Vendor')
const router = express.Router()

router.get('/', verifyApiKey, vendorController.getAll)
router.post('/', verifyApiKey, vendorController.create)
router.put('/:vendorId', verifyApiKey, vendorController.update)
router.delete('/:vendorId', verifyApiKey, vendorController.delete)

module.exports = router

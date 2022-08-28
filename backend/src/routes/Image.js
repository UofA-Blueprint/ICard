const express = require('express');
const router = express.Router();
const Multer = require('multer');
const imgUpload = require('../services/ImgUpload');
const imageController = require('../controllers/Image');
const { verifyApiKey, checkAuthenticated } = require('../services/verifyToken');
// Handles the mulitpart/form-data
// Adds a .file key to the req object
// the 'storage' key saves the image temporarily in memory
// You can also pass a file path on your server and it will save the image there
const multer = Multer({
    storage: Multer.memoryStorage(),
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
});

// multer accessing the key 'image', as defined in the 'FormData' object on the frontend
// Passing the uploadToGCS function as middleware to handle the uploading of req.file
router.post('/upload', verifyApiKey, checkAuthenticated, multer.single('image'), imgUpload.uploadToGCS, imageController.upload);

module.exports = router
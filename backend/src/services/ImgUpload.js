'use strict';
const Cloud = require('@google-cloud/storage');
const Student = require('../models/Student');
const Vendor = require('../models/Vendor');

require('dotenv').config();
const { Storage } = Cloud;
const gcs = new Storage({
    projectId: 'isa-icard',
    credentials: JSON.parse(process.env.GOOGLE_CLOUD_STORAGE_JSON),
});

const bucketName = 'isa-icard';
// get a reference to the bucket that we want to upload to
const bucket = gcs.bucket(bucketName);

/**
 *
 * @param {string} filename
 * @returns {string} public url
 */
function getPublicUrl(filename) {
    return `https://storage.googleapis.com/${bucketName}/${filename}`;
}

/**
 *
 * @param {string} fileName
 */
async function deleteFile(fileName) {
    await gcs.bucket(bucketName).file(fileName).delete();
}

let ImgUpload = {};

// upload a file to the bucket and return the public url
ImgUpload.uploadToGCS = async (req, res, next) => {
    if (!req.user.email) {
        return res.status(400).json({
            message: 'Email is required',
        });
    }

    // validate if the student exists in the database with the given email
    const student = await Student.findOne({ email: req.user.email });
    if (!student) {
        return res.status(400).json({
            message: 'Student does not exist',
        });
    }

    // check if the request has a file
    if (!req.file) {
        return next();
    }

    // Can optionally add a path to the gcsname below by concatenating it to the filename.
    const gcsname = Date.now() + '-' + req.file.originalname;
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
        // create a stream to upload the file to the bucket
        metadata: {
            contentType: req.file.mimetype,
        },
    });

    stream.on('error', (err) => {
        req.file.cloudStorageError = err;
        next(err);
    });

    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsname;
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
        next();
    });

    stream.end(req.file.buffer); // end the stream and upload the file to the bucket
};

ImgUpload.uploadVendorToGCS = async (req, res, next) => {
    if (!req.body.vendorId) {
        return res.status(400).json({
            message: 'Vendor ID is required',
        });
    }

    const vendor = await Vendor.findOne({ _id: req.body.vendorId });
    if (!vendor) {
        return res.status(400).json({
            message: 'Vendor does not exist',
        });
    }

    if (!req.file) {
        return next();
    }

    const gcsname = Date.now() + '-' + req.file.originalname;
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
        metadata: {},
    });

    stream.on('error', (err) => {
        req.file.cloudStorageError = err;
        next(err);
    });

    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsname;
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
        next();
    });

    stream.end(req.file.buffer);
};

module.exports = ImgUpload;

'use strict';
const Cloud = require('@google-cloud/storage');
const fs = require('fs');
const Student = require('../models/Student');
const { Storage } = Cloud;
const gcs = new Storage({
    projectId: 'isa-icard',
    keyFilename: './isa-icard-2261fd0e0b9a.json'
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

let ImgUpload = {};

// upload a file to the bucket and return the public url
ImgUpload.uploadToGCS = async(req, res, next) => {

    if (!req.user.email) {
        return res.status(400).json({
            message: 'Email is required'
        });
    }
    
    // validate if the student exists in the database with the given email
    const student = await Student.findOne({ email: req.user.email });
    if (!student) {
        return res.status(400).json({
            message: 'Student does not exist'
        });
    }

    // check if the request has a file
    if (!req.file) {
        return next();
    }

    // Can optionally add a path to the gcsname below by concatenating it to the filename.
    const gcsname = Date.now() + '-' + req.file.originalname;
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({ // create a stream to upload the file to the bucket
        metadata: {
            contentType: req.file.mimetype
        }
    });

    stream.on('error', (err) => {
        req.file.cloudStorageError = err;
        next(err);
    }
    );

    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsname;
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
        next();
    });

    stream.end(req.file.buffer);    // end the stream and upload the file to the bucket
}

module.exports = ImgUpload;
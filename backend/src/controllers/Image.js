const Student = require('../models/Student');
const Vendor = require('../models/Vendor');

module.exports = {
    upload: async (req, res) => {
        const data = req.body;
        if (req.file && req.file.cloudStoragePublicUrl) {
            data.imageUrl = req.file.cloudStoragePublicUrl;
        }

        await Student.updateOne(
            { email: req.user.email },
            { $set: { verification_image: data.imageUrl, updated: true } }
        );

        res.json({
            message: 'Image uploaded successfully',
        });
    },
    vendor: async (req, res) => {
        const data = req.body;
        if (req.file && req.file.cloudStoragePublicUrl) {
            data.imageUrl = req.file.cloudStoragePublicUrl;
        }

        await Vendor.updateOne({ _id: req.body.vendorId }, { $set: { image: data.imageUrl } });

        res.json({
            message: 'Image uploaded successfully',
        });
    },
};

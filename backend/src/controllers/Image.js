const Student = require('../models/Student');

module.exports = {
    upload: async (req, res) => {
        const data = req.body
        if (req.file && req.file.cloudStoragePublicUrl) {
            data.imageUrl = req.file.cloudStoragePublicUrl
        }

        await Student.updateOne(
            { email: req.user.email },
            { $set: { verification_image: data.imageUrl } }
        )

        res.json({
            message: 'Image uploaded successfully',
        })
    }
}
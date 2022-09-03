const mongoose = require('mongoose')

const VendorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
        },
        description: {
            type: String,
        },
        phone_number: {
            type: String,
        },
    },
    { collection: 'vendors', versionKey: false }
)

module.exports = mongoose.model('Vendor', VendorSchema)

const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 255,
        },
        icard_number: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 10,
        },
        active: {
            type: Boolean,
            required: true,
        },
        isaf_paying_status: {
            type: Boolean,
            required: true,
        },
    },
    { collection: 'students', versionKey: false }
)

module.exports = mongoose.model('Student', StudentSchema)

const mongoose = require('mongoose');

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
        isaf_status: {
            type: Boolean,
            required: true,
            default: false,
        },
        verify_status: {
            type: Boolean,
            required: true,
            default: false,
        },
        picture: {
            type: String,
        },
        verification_image: {
            type: String,
        },
        updated: {
            type: Boolean,
            default: false,
        },
    },
    { collection: 'students', versionKey: false }
);

module.exports = mongoose.model('Student', StudentSchema);

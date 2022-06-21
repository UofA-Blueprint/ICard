const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 5,
            maxlength: 255,
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 1024,
        },
    },
    { collection: 'auth', versionKey: false }
)

module.exports = mongoose.model('User', userSchema)

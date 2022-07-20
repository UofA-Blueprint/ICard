const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        encryptedPassword: {
            type: String,
            required: true,
        },
        role: { 
            type: String,
            enum: ['admin', 'restricted'], 
            required: true,
        }
    },
    { collection: 'auth', versionKey: false }
)

module.exports = mongoose.model('User', userSchema)

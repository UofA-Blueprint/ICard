const Joi = require('joi')

const validateLogin = (data) => {
    // valiidate the login request body
    const schema = Joi.object({
        // create a schema
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
    })

    return schema.validate(data) // validate the data
}

module.exports = validateLogin

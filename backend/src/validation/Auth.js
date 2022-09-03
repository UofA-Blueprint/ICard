const Joi = require('joi')

module.exports = {
    validateLogin: (data) => {
        // valiidate the login request body
        const schema = Joi.object({
            // create a schema
            email: Joi.string().min(6).max(255).required().email(),
            password: Joi.string().min(5).max(1024).required(),
        })

        return schema.validate(data) // validate the data
    },
    validateRegister: (data) => {
        // validate the register request body
        const schema = Joi.object({
            // create a schema
            name: Joi.string().min(3).max(255).required(),
            email: Joi.string().min(6).max(255).required().email(),
            password: Joi.string().min(5).max(1024).required(),
            icard_number: Joi.string().min(5).max(1024).required(),
        })

        return schema.validate(data) // validate the data
    }
}

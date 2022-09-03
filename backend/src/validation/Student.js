const Joi = require('joi')

const studentValidation = (data) => {
    // validate the student request body
    const schema = Joi.object({
        // create a schema
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(6).max(255).required().email(),
        icard_number: Joi.string().min(6).max(10).required(),
        active: Joi.boolean().required(),
        isaf_paying_status: Joi.boolean().required(),
    })

    return schema.validate(data) // validate the data
}

module.exports = studentValidation

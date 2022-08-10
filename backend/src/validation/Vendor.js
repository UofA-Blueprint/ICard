const Joi = require('joi')

const vendorValidation = (data) => {
    // validate the vendor request body
    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string(),
        description: Joi.string(),
        phone_number: Joi.string().min(6).max(10),
    })

    return schema.validate(data) // validate the data
}

module.exports = vendorValidation
const User = require('../models/User')
const validateLogin = require('../validation/Auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    login: async (req, res) => {
        const { error } = validateLogin(req.body) // validate the data
        if (error)
            return res.status(400).json({ message: error.details[0].message }) // if error, return 400 with error message

        // Check if student exists
        const checkStudent = await User.findOne({ email: req.body.email })
        if (!checkStudent)
            return res
                .status(400)
                .json({ message: 'Incorrect username or password' }) // if student does not exist, return 400 with error message

        // Check if password is correct
        const validPassword = await bcrypt.compare(
            req.body.password,
            checkStudent.password
        )
        if (!validPassword)
            return res
                .status(400)
                .json({ message: 'Incorrect username or password' }) // if password is incorrect, return 400 with error message

        // Create token
        const token = jwt.sign(
            { _id: checkStudent._id },
            process.env.JWT_SECRET
        )
        res.header('auth-token', token).json({ token: token }) // return token
    },
}

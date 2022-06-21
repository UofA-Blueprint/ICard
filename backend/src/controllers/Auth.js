const User = require('../models/User')
const Student = require('../models/Student')
const { validateLogin, validateRegister } = require('../validation/Auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

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
    register: async (req, res) => {
        const { error } = validateRegister(req.body) // validate the data
        if (error)
            return res.status(400).json({ message: error.details[0].message }) // if error, return 400 with error message

        // Check if student exists
        const checkStudent = await User.findOne({ email: req.body.email })
        if (checkStudent)
            return res.status(400).json({ message: 'Student already exists' }) // if student exists, return 400 with error message

        // Hash password
        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        try {
            const newUser = new User({
                email: req.body.email,
                password: hashedPassword,
            })

            // add auth to database
            await User.create(newUser)

            /**
             * This is a temporary student modal
             * I have randomly set active to true and
             * isaf_paying_status to false.
             */

            // create new student
            const student = new Student({
                name: req.body.name,
                icard_number: req.body.icard_number,
                email: req.body.email,
                active: true,
                isaf_paying_status: false,
            })

            // add student to database
            await Student.create(student)
        } catch (err) {
            return res.status(400).json({ message: err }) // if error, return 400 with error message
        }

        res.status(201).json({ message: 'Student Registered' }) // if successful, return 201 with message
    },
}

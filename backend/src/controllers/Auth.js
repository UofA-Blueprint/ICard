const Student = require('../models/Student')
var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    // Returns Student if exists or creates new Student
    login: async (req, res) => {
        const user = req.user // get the user from the request

        const check_student_db = await Student.findOne({ email: user.email }) // check if the user exists in the database

        if (check_student_db) {
            const studentWithKey = {
                id: check_student_db.id,
                name: check_student_db.name,
                email: check_student_db.email,
                isaf_status: check_student_db.isaf_status,
                verify_status: check_student_db.verify_status,
                picture: check_student_db.picture,
                key: jwt.sign(
                    {
                        email: check_student_db.email,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '30d' }
                ),
                verification_image: check_student_db.verification_image
            }
            return res.status(200).json(studentWithKey) // if the user exists, return the user
        } else {
            const new_student = new Student({
                // if the user doesn't exist, create a new user
                name: user.name,
                email: user.email,
                isaf_status: false,
                verify_status: false,
                picture: user.picture,
            })

            try {
                const new_student_db = await Student.create(new_student)

                const studentWithKey = {
                    name: new_student_db.name,
                    email: new_student_db.email,
                    isaf_status: new_student_db.isaf_status,
                    verify_status: new_student_db.verify_status,
                    picture: new_student_db.picture,
                    key: jwt.sign(
                        {
                            email: new_student_db.email,
                        },
                        process.env.JWT_SECRET,
                        { expiresIn: '30d' }
                    ),
                }

                return res.status(200).json(studentWithKey) // return the new user with the jwt key valid for 30 days
            } catch (err) {
                return res.status(500).json({ message: err })
            }
        }
    },
    // Validates the JWT Token passed in the header
    validateKey: async (req, res) => {
        const token = req.header('jwt-token')
        if (!token) 
            return res
                .status(401)
                .json({ message: 'Invalid Token' })

        try {
            const verified = await jwt.verify(token, process.env.JWT_SECRET)
            if (verified) {
                return res.status(200).json({ message: 'Valid Token' })
            }
        } catch (err) {
            console.log(err)
            res.status(400).json({ message: 'Invalid token.' })
        }
    },
}

const Student = require('../models/Student')
require('dotenv').config()

module.exports = {
    // Returns Student if exists or creates new Student
    login: async (req, res) => {
        const user = req.user // get the user from the request

        const check_student_db = await Student.findOne({ email: user.email }) // check if the user exists in the database

        if (check_student_db) {
            return res.status(200).json(check_student_db) // if the user exists, return the user
        } else {
            const new_student = new Student({
                // if the user doesn't exist, create a new user
                name: user.name,
                email: user.email,
                active_status: false,
                isaf_status: false,
                verify: false,
                picture: user.picture,
            })

            try {
                const new_student_db = await Student.create(new_student)
                return res.status(200).json(new_student_db)
            } catch (err) {
                return res.status(500).json({ message: err })
            }
        }
    },
}

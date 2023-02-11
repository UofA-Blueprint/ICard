const Student = require('../models/Student');
var jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    // Returns Student if exists or creates new Student
    login: async (req, res) => {
        const user = req.user; // get the user from the request

        const check_student_db = await Student.findOne({ email: user.email }); // check if the user exists in the database
        if (check_student_db) {
            let { ...payload } = check_student_db;
            payload._doc.key = jwt.sign(
                {
                    email: check_student_db.email,
                },
                process.env.JWT_SECRET,
                { expiresIn: '30d' }
            );

            return res.status(200).json(payload._doc); // return the user with the jwt key valid for 30 days
        } else {
            const new_student = new Student({
                // if the user doesn't exist, create a new user
                name: user.name,
                email: user.email,
                isaf_status: false,
                verify_status: false,
                picture: user.picture,
            });

            try {
                await Student.create(new_student);
                const fetch_student = await Student.findOne({ email: user.email });
                let { ...payload } = fetch_student;
                payload._doc.key = jwt.sign(
                    {
                        email: fetch_student.email,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '30d' }
                );

                return res.status(200).json(payload._doc); // return the new user with the jwt key valid for 30 days
            } catch (err) {
                return res.status(500).json({ message: err });
            }
        }
    },
    // Validates the JWT Token passed in the header
    validateKey: async (req, res) => {
        const token = req.header('jwt-token');
        if (!token) return res.status(401).json({ message: 'Invalid Token' });

        try {
            const verified = await jwt.verify(token, process.env.JWT_SECRET);
            if (verified) {
                return res.status(200).json({ message: 'Valid Token' });
            }
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: 'Invalid token.' });
        }
    },
};

const Student = require('../models/Student')
const validateStudent = require('../validation/Student')

module.exports = {
    getStudent: async (req, res) => {
        try {
            const student = await Student.findById(req.params.studentId) // get the student by id
            res.json(student) // send the student
        } catch (err) {
            res.status(500).json({ message: err }) // if error, send 500 status
        }
    },
    create: async (req, res) => {
        const { error } = validateStudent(req.body) // validate the data
        if (error)
            return res.status(400).json({ message: error.details[0].message }) // if error, return 400 with error message
        // Check if student already exists
        const checkStudent = await Student.findOne({ email: req.body.email })
        if (checkStudent)
            return res.status(400).json({ message: 'Student already exists' }) // if student already exists, return 400 with error message

        const student = new Student(req.body) // create a new student
        try {
            const newStudent = await Student.create(student) // create the student
            res.json(newStudent) // return the student
        } catch (err) {
            res.status(500).json({ message: err }) // if error, send 500 status
        }
    },
    update: async (req, res) => {
        // Check if student exists
        const checkStudent = await Student.findOne({
            _id: req.params.studentId,
        })
        if (!checkStudent)
            return res.status(400).json({ message: 'Student does not exist' }) // if student does not exist, return 400 with error message

        try {
            // Update the student
            const updatedStudent = await Student.findByIdAndUpdate(
                req.params.studentId,
                req.body)
            res.json(updatedStudent) // return the student
        } catch (err) {
            res.status(500).json({ message: err }) // if error, send 500 status
        }
    },
    delete: async (req, res) => {
        // Check if student exists
        const checkStudent = await Student.findOne({
            _id: req.params.studentId,
        })
        if (!checkStudent)
            return res.status(400).json({ message: 'Student does not exist' }) // if student does not exist, return 400 with error message

        try {
            // Delete the student
            const deletedStudent = await Student.findByIdAndDelete(
                req.params.studentId
            )
            res.json(deletedStudent)
        } catch (err) {
            res.status(500).json({ message: err }) // if error, send 500 status
        }
    },
}

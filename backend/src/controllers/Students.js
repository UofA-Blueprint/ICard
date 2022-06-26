const Student = require('../models/Student')
const validateStudent = require('../validation/Student')

module.exports = {
    getAll: async (req, res) => {
        try {
            const students = await Student.find()
            res.status(200).json(students)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    getStudent: async (req, res) => {
        try {
            const student = await Student.findById(req.params.studentId)
            res.json(student)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    create: async (req, res) => {
        const { error } = validateStudent(req.body) // validate the data
        if (error)
            return res.status(400).json({ message: error.details[0].message })
        // Check if student already exists
        const checkStudent = await Student.findOne({ email: req.body.email })
        if (checkStudent)
            return res.status(400).json({ message: 'Student already exists' }) // if student already exists, return 400 with error message

        const student = new Student(req.body)
        try {
            const newStudent = await Student.create(student)
            res.status(201).json(newStudent)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    update: async (req, res) => {
        const checkStudent = await Student.findOne({ // Check if student exists
            _id: req.params.studentId,
        })
        if (!checkStudent)
            return res.status(400).json({ message: 'Student does not exist' })

        try {
            // Update the student
            await Student.findByIdAndUpdate(req.params.studentId, req.body)
            res.status(200).json({ message: 'Student Updated' })
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    delete: async (req, res) => {
        const checkStudent = await Student.findOne({ // Check if student exists
            _id: req.params.studentId,
        })
        if (!checkStudent)
            return res.status(400).json({ message: 'Student does not exist' })

        try {
            // Delete the student
            const deletedStudent = await Student.findByIdAndDelete(
                req.params.studentId
            )
            res.json(deletedStudent)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
}

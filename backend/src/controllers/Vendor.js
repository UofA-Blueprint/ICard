const Vendor = require('../models/Vendor');
const vendorValidation = require('../validation/Vendor');

module.exports = {
    getAll: async (req, res) => {
        try {
            const vendors = await Vendor.find();
            res.status(200).json(vendors);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
    create: async (req, res) => {
        const { error } = vendorValidation(req.body); // validate the data
        if (error) return res.status(400).json({ message: error.details[0].message });

        const checkVendor = await Vendor.findOne({
            name: req.body.name,
            phone_number: req.body.phone_number,
        });
        if (checkVendor)
            // before creating a new vendor, check if it already exists
            return res.status(400).json({ message: 'Vendor already exists' });

        const vendor = new Vendor(req.body);

        try {
            const newVendor = await Vendor.create(vendor);
            res.status(201).json(newVendor);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
    update: async (req, res) => {
        const { error } = vendorValidation(req.body); // validate the data
        if (error) return res.status(400).json({ message: error.details[0].message });

        const vendor = await Vendor.findByIdAndUpdate(req.params.vendorId, req.body);
        if (!vendor) return res.status(400).json({ message: 'Vendor does not exist' });

        try {
            const updatedVendor = await Vendor.findById(req.params.vendorId);
            res.status(200).json(updatedVendor);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
    delete: async (req, res) => {
        const checkStudent = await Vendor.findOne({ _id: req.params.vendorId });
        if (!checkStudent) return res.status(400).json({ message: 'Vendor does not exist' });

        try {
            const deletedStudent = await Vendor.findByIdAndDelete(req.params.vendorId);
            res.status(200).json(deletedStudent);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
};

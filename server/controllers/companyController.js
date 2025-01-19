const { createCompany } = require('../models/companyModel');

const addCompany = async (req, res) => {
  try {
    const { name, ico, address, contact, director } = req.body;
    if (!name || !ico || !address || !contact || !director) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    const newCompany = await createCompany(name, ico, address, contact, director);
    res.status(201).json(newCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addCompany };

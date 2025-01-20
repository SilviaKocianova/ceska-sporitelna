const addCompany = async (req, res) => {
  try {
    const { name, ico, address, contact, director } = req.body;
    
    if (!name || !ico || !address || !contact || !director) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    console.log('Received company data:', { name, ico, address, contact, director });

    res.status(200).json({ message: 'Data received successfully', data: { name, ico, address, contact, director } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addCompany };

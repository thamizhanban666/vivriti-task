const Employee = require("../Models/employeeModel");

// Update an employee
const updateEmployee = async (req, res) => {
  
  try {
    if (req.body.user_id) res.status(400).json("Cannot update user_id");
    else {
      const updatedData = await Employee.findOneAndUpdate(
        { user_id: req.params.id },
        req.body,
        { new: true }
      );
    
      if (updatedData) res.status(200).json(updatedData)
      else res.status(404).json("Invalid user_id");
    }
      
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = updateEmployee;
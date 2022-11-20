const Employee = require("../Models/employeeModel");

// Delete an employee
const deleteEmployee = async (req, res) => {
  try {
    const deletedData = await Employee.deleteOne({ user_id: req.params.id });
    
    if (deletedData.deletedCount === 1) res.status(200).json("User Deleted Successfully")
    else res.status(404).json("Invalid user_id");
      
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = deleteEmployee;
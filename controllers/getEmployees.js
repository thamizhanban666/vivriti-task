const Employee = require("../Models/employeeModel");

// List the employees
const getEmployees = async (req, res) => {
  try {
    const employeesData = await Employee.find();
    res.status(200).send(employeesData)
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = getEmployees;
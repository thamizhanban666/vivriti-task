const Counter = require("../Models/counterModel");
const Employee = require("../Models/employeeModel");

// create an employee ( post )
const createEmployee = async (req, res) => {
  try {
    // create a new employee without id
    const employee = await Employee.create(req.body);

    // check whether the employee is created
    if (employee) {
      
      // update the existing counter by increamenting by 1
      const counterData = await Counter.findOneAndUpdate(
        { id: "autoCounter" },
        { $inc: { counter: 1 } },
        { new: true }
      )
      
      let employeeId;
      if (counterData) {
        employeeId = counterData.counter;
      } else {
        // create counter first if it does not exist
        Counter.create({ id: "autoCounter", counter: 1 });
        employeeId = 1;
      }

      // update the employee with the user_id
      const updatedEmployee = await Employee.findOneAndUpdate(
        { _id: employee._id },
        { $set: { user_id: employeeId } },
        { new: true },
      )

      // res.status(201).json(JSON.stringify(updatedEmployee));
      res.status(201).json(updatedEmployee);
          
    } else {
      res.status(400);
      throw {status: 'failed', message: 'Cannot create an employee'}
    }

  } catch (error) {
    res.status(500).json(error)
  }

}

module.exports = createEmployee;
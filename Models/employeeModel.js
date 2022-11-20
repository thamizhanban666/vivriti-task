const mongoose = require("mongoose");

const schema = mongoose.Schema({
  user_id : {type: Number, unique: true, default: -1},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
  
}, { timestamps: true });

const Employee = mongoose.model("Employee", schema);

module.exports = Employee;
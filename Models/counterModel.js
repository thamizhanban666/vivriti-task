const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: { type: String },
  counter: {type: Number}
  
}, { timestamps: true });

const Counter = mongoose.model("Counter", schema);

module.exports = Counter;
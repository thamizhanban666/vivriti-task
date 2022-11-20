const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/employeeRoutes");
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// MongoDB Connection
const URI = process.env.MONGODB_URI;

mongoose.connect(URI).then((res) => console.log("MongoDB is connected")).catch((err) => console.log(err))

// cors
app.use(cors());

// Middleware
app.use(express.json());

// api
app.get("/", (req, res) => {
  res.send("API is running")
})

// routes
app.use('/api/employee', employeeRoutes);

// listen
app.listen(PORT, () => { console.log(`server is running at port-${PORT}`) });

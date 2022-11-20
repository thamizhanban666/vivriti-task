const express = require("express");
const createEmployee = require("../controllers/createEmployee");
const deleteEmployee = require("../controllers/deleteEmployee");
const getEmployees = require("../controllers/getEmployees");
const updateEmployee = require("../controllers/updateEmployee");
const router = express.Router();

router.post('/', createEmployee);
router.get('/', getEmployees);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
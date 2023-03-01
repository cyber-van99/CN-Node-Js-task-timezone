//Routes
const router = require("express").Router();
const Timesheet = require("./timesheet.controller");

// Retrieve all trades
router.post("/", Timesheet.fetchTImeSheet);

module.exports = router;
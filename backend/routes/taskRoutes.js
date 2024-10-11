const express = require("express");
const { getTasks, updateTaskStatus } = require("../controllers/taskController");
const router = express.Router();

// Add authorization middleware later if required
router.get("/", getTasks);
router.patch("/:id", updateTaskStatus);

module.exports = router;

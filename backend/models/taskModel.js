const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  taskId: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("Task", taskSchema);

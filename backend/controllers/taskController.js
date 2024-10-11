const Task = require("../models/taskModel");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.userId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { isCompleted: true },
      { new: true }
    );
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

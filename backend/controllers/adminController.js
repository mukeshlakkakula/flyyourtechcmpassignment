const User = require("../models/userModel");
const Task = require("../models/taskModel");

exports.getAdminStats = async (req, res) => {
  try {
    const users = await User.find();
    const taskCompletionStats = await Task.aggregate([
      {
        $group: {
          _id: "$assignedTo",
          tasksCompleted: {
            $sum: { $cond: [{ $eq: ["$isCompleted", true] }, 1, 0] },
          },
        },
      },
    ]);

    res.status(200).json({ users, taskCompletionStats });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

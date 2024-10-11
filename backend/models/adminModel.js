const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "Admin" },
  lastLogin: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Admin", adminSchema);

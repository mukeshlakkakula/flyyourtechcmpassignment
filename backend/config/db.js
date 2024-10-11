const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lakkakulababblu:Mukesh%40950@cluster0.bfd6k.mongodb.net/flytechnew?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

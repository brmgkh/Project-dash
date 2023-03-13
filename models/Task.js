const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  date: String,
});
module.exports = mongoose.model("Task", TaskSchema);

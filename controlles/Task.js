const Task = require("../models/Task");
exports.AddTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(200).send({ msg: "Task added", newTask });
  } catch (error) {
    res.status(500).send("couldn't add Task");
  }
};

exports.GetTask = async (req, res) => {
  try {
    const Tasks = await Task.find();
    res.status(200).send({ msg: "Liste of Tasks", Tasks });
  } catch (error) {
    res.status(500).send("couldn't get tasks");
  }
};

exports.DeleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).send("Task was not deleted");
  }
};

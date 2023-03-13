const express = require("express");
const { AddTask, GetTask, DeleteTask } = require("../controlles/Task");
const TaskRoute = express.Router();
TaskRoute.post("/add", AddTask);
TaskRoute.get("/all", GetTask);
TaskRoute.delete("/del/:id", DeleteTask);
module.exports = TaskRoute;

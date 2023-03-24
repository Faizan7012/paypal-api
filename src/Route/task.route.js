const express = require("express");
const { getTask, createTask, delTask, editTask, changeStatus, getTaskByAssignee } = require("../Controller/task.controller");

// {createTask , getTask , delTask , editTask , changeStatus , getTaskByAssignee}
const taskRoute = express.Router();

taskRoute.get("/:id", getTask )
taskRoute.get("/assign/:id", getTaskByAssignee )
taskRoute.post("/", createTask )
taskRoute.delete("/:id", delTask )
taskRoute.patch("/:id", editTask )
taskRoute.patch("/status/:id", changeStatus )
module.exports = { taskRoute };
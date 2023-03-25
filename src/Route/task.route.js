const express = require("express");
const { getTask, createTask, delTask, editTask, changeStatus,  getSingleTask } = require("../Controller/task.controller");


const taskRoute = express.Router();
// get tasks with filter also
taskRoute.get("/:id", getTask )

// get single task
taskRoute.get("/single/:id", getSingleTask )

// create task
taskRoute.post("/", createTask )

// delete task
taskRoute.delete("/:id", delTask )

// edit task , change assignee , change name , type
taskRoute.patch("/:id", editTask )

// change status of task 
taskRoute.patch("/status/:id", changeStatus )
module.exports = { taskRoute };
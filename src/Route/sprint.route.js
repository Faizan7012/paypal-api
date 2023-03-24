const express = require("express");
const { getSprint, delSprint, createSprint } = require("../Controller/sprint.controller");


const sprintRoute = express.Router();


sprintRoute.get("/", getSprint )
sprintRoute.post("/", createSprint )
sprintRoute.delete("/:id", delSprint )
module.exports = { sprintRoute };
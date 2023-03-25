const express = require("express");
const { getSprint, delSprint, createSprint } = require("../Controller/sprint.controller");
const taskModel = require("../Model/task.model");


const sprintRoute = express.Router();

// get sprints
sprintRoute.get("/", getSprint )

// create sprint
sprintRoute.post("/", createSprint )

// delete sprint
sprintRoute.delete("/:id", delSprint )

// get all tasks count in every sprint
sprintRoute.get("/tasks", async(req , res)=>{
    try {
        
     let ans = await taskModel.aggregate([{$group : {_id : '$sprint' ,count: { $count: { }}} }]);
     res.send({
        status:true , 
        data : ans
     })

    } catch (e) {
        res.status(401).send({
            status:false,
            message : e.message
        })
    }
} )
module.exports = { sprintRoute };
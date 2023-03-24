const sprintModel = require("../Model/sprint.model");
const taskModel = require("../Model/task.model");

const createSprint = async(req , res)=>{
    const {name} = req.body;
    try {
        
     let newSprint = await sprintModel.create({ name})
     res.status(201).send({
       status:true , 
       message : 'Sprint created successfully'
     })

    } catch (error) {
        res.status(401).send({
            status:false,
            message: error.message
        })
    }
}

const getSprint = async(req , res)=>{
    try {
     let sprints = await sprintModel.find()
     res.status(201).send({
       status:true , 
       data: sprints
     })
    } catch (error) {
        res.status(401).send({
            status:false,
            message: error.message
        })
    }
}

const delSprint = async(req , res)=>{
  const {id}  = req.params;
    try {
     let sprints = await sprintModel.findByIdAndDelete(id);
     let delTask = await taskModel.deleteMany({sprint : id})
     res.status(201).send({
       status:true , 
       message : 'Sprint deleted successfully'
     })
    } catch (error) {
        res.status(401).send({
            status:false,
            message: error.message
        })
    }
}

module.exports = {delSprint , createSprint , getSprint}
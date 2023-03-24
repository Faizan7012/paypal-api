const taskModel = require("../Model/task.model")

const createTask = async(req , res)=>{
  try {
    
   let newTask = await taskModel.create(req.body);

   res.status(201).send({
       status:true,
       message : 'Task created successfully'
   })

  } catch (error) {
    res.status(401).send({
        status:false , 
        message : error.message
    })
  }
}

const getTask = async(req , res)=>{
    const {id} = req.params;
    try {
      
     let tasks = await taskModel.find({sprint : id}).populate(['sprint','assign']);
     res.status(201).send({
         status:true,
         data : tasks
     })
  
    } catch (error) {
      res.status(401).send({
          status:false , 
          message : error.message
      })
    }
  }

  const delTask = async(req , res)=>{
    const {id} = req.params;
    try {
      
     let tasks = await taskModel.findByIdAndDelete(id);
     res.status(201).send({
         status:true,
         message: 'Task deleted successfully'
     })
  
    } catch (error) {
      res.status(401).send({
          status:false , 
          message : error.message
      })
    }
  }

  const editTask = async(req , res)=>{
    const {id} = req.params;
    try {
      
     let tasks = await taskModel.updateOne({_id:id} , {$set:{name : req.body.name , 
      type : req.body.type ,
      assign : req.body.assign}});
     res.status(201).send({
         status:true,
         message: 'Task updated successfully'
     })
  
    } catch (error) {
      res.status(401).send({
          status:false , 
          message : error.message
      })
    }
  }

  const changeStatus = async(req , res)=>{
    const {id} = req.params;
    try {
      
     let tasks = await taskModel.findByIdAndUpdate(id , {
        status: req.body.status
     });
     res.status(201).send({
         status:true,
         message: 'Task status changed successfully'
     })
  
    } catch (error) {
      res.status(401).send({
          status:false , 
          message : error.message
      })
    }
  }

  const getTaskByAssignee = async(req , res)=>{
    const {id} = req.params;
    try {
      
     let tasks = await taskModel.find({assign : id}).populate(['sprint','assign'])
     res.status(201).send({
         status:true,
         data:tasks
     })
  
    } catch (error) {
      res.status(401).send({
          status:false , 
          message : error.message
      })
    }
  }
  const getSingleTask = async(req , res)=>{
    const {id} = req.params;
    try {
      
     let task = await taskModel.findOne({_id:id}).populate(['sprint','assign'])
     res.status(201).send({
         status:true,
         data:task
     })
  
    } catch (error) {
      res.status(401).send({
          status:false , 
          message : error.message
      })
    }
  }

  module.exports = {createTask , getTask , delTask , editTask , changeStatus , getTaskByAssignee , getSingleTask}
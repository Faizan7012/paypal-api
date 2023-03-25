const taskModel = require("../Model/task.model")

/// Create new task 
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

/// get all tasks , filter by sprint , filter by assignee also
const getTask = async(req , res)=>{
    const {id} = req.params;
    const [sp , ass] = id.split(':');
    try {
      
     let tasks = await taskModel.find().populate(['sprint','assign']);
     if(sp){
      tasks = await taskModel.find({sprint: sp}).populate(['sprint','assign']);
      if(ass){
        tasks = await taskModel.find({sprint: sp,assign: ass}).populate(['sprint','assign']);
      }
     }
     if(ass && !sp){
      tasks = await taskModel.find({assign: ass}).populate(['sprint','assign']);
     }
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


  ///// delete task 
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


  //// edit task
  const editTask = async(req , res)=>{
    const {id} = req.params;
    try {
      
     let tasks = await taskModel.findByIdAndUpdate(id , {name : req.body.name , 
      type : req.body.type ,
      assign : req.body.assign});
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

  /// change task status
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

 /// get single task
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

  module.exports = {createTask , getTask , delTask , editTask , changeStatus ,getSingleTask}
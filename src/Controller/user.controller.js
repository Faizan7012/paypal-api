require("dotenv").config();
const userModel = require("../Model/user.model");

const getUser = async(req , res)=>{
   try{
     let users = await userModel.find();
     res.send({
      status:true,
      data:users
     })
   }
   catch(e){
    res.send({
      status:false,
      message:e.message
    })
   }
}

module.exports = { getUser };

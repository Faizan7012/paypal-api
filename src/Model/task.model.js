const { model, Schema } = require("mongoose");
const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    sprint: {
      type: Schema.Types.ObjectId,
      ref: "sprint",
      required: true
    },
    assign:{
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    status : {type : String , default : 'To Do' }
   }
);
const taskModel = model("task", taskSchema);
module.exports = taskModel;
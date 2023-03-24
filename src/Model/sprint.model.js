const { model, Schema } = require("mongoose");
const sprintSchema = new Schema(
  {
    name: { type: String, required: true , unique : true }
  }
);
const sprintModel = model("sprint", sprintSchema);
module.exports = sprintModel;
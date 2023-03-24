const { model, Schema } = require("mongoose");
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    img:{type: String, required: true}
  }
);
const userModel = model("user", userSchema);
module.exports = userModel;
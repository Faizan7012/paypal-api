require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
const { userRoute } = require("./Route/user.route");
const { sprintRoute } = require("./Route/sprint.route");
const { taskRoute } = require("./Route/task.route");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/sprint", sprintRoute);
app.use("/task", taskRoute);

app.get("/", (req, res) => {
  res.send("welcome to PayPal Server");
});

app.listen(process.env.PORT, async (req, res) => {
  console.log(`http://localhost:${process.env.PORT}`);
  try {
    await connectDB();
    console.log("DB connection established");
  } catch (error) {
    console.log(error.message);
  }
});

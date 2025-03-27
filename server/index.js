const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routers/user.router");
const flightRouter = require("./routers/flight.router");

const BASE_URL = process.env.BASE_URL; //
const PORT = process.env.PORT; //เชื่อมกับ PORT
const DB_URL = process.env.DB_URL;

//Connect to Mongo DB
try {
  mongoose.connect(DB_URL);
  console.log("Connect To Mongo DB Successfully");
} catch (error) {
  console.log("DB Connection Failed");
}

app.use(cors({ origin: BASE_URL, credentials: true }));
app.use(express.json()); //ทำให้อ่านไฟล์ json
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Final Test Resful API</h1>");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/flight", flightRouter);

app.listen(PORT, () => {
  console.log("Server Running on http://localhost:" + PORT); //เชื่อมกับ PORT
});

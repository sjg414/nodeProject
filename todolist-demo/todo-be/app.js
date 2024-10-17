const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use("/api", indexRouter); // /api 주소로 요청이 올 경우 indexRouter 사용
const mongoURI = "mongodb://localhost:27017/todo-demo";

//mongoose setting
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

//express connect
app.listen(4000, () => {
  console.log("server on 4000");
});

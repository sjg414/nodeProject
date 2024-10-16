const express = require("express");
const app = express();
const token = "afaef";
//라우팅
// app.get("/", (req, res) => {
//   res.send("hello express world");
// });

// app.get("/about", (req, res) => {
//   res.send("This is about");
// });

//미들웨어
const checkAuth = (req, res, next) => {
  console.log("she has admin permission");
  next();
};

const checkToken = (req, res, next) => {
  if (token) next();
  else res.send("you don't have token");
};

const getUser = (req, res) => {
  console.log("here is user info");
  res.send("here is user info");
};

app.get("/users", checkAuth, checkToken, getUser); //checkAuth, checkToken: 미들웨어, getUser : 실행 함수(미들웨어를 거친 후 함수를 실행함)

app.listen(4000, () => {
  console.log("server is on 4000");
});

const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`; //db server
const client = new MongoClient(uri); //db 연결

async function run() {
  const database = client.db("firstDB"); //firstDB 선택
  const users = database.collection("users"); //users table

  //data create
  // const userData = await users.insertOne({ name: "재근", age: "31" });
  // console.log("result", userData);
  // const userList = await users.insertMany([
  //   { name: "철수", age: "20" },
  //   { name: "영희", age: "30" },
  // ]);
  // console.log("result", userList);

  //data read
  // const findUser = await users.findOne({ age: { $gt: "20" } });
  // console.log("Result", findUser);

  //data update
  // const updateUser = await users.updateOne(
  //   { name: "철수" },
  //   { $set: { age: 15 } }
  // );
  // console.log("result", updateUser);

  //data delete
  // const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
  // console.log("result", deleteUsers);

  //project 1: 표시 , 0: 제외하고 검색
  const userData = await users
    .find({ name: "철수" })
    .project({ name: 1, _id: 0 })
    .toArray();
  console.log("result", userData);
}

run();

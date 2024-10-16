const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const inventory = database.collection("inventory");
  const students = database.collection("students");

  //문제 1.
  // const singleData = await inventory.insertOne({
  //   item: "canvas",
  //   qty: 100,
  //   tags: ["cotton"],
  //   size: { h: 28, w: 35.5, uom: "cm" },
  // });
  // console.log("result", singleData);

  //문제2.
  // const manyDatas = await inventory.insertMany([
  //   {
  //     item: "journal",
  //     qty: 25,
  //     tags: ["blank", "red"],
  //     size: { h: 14, w: 21, uom: "cm" },
  //   },
  //   {
  //     item: "mat",
  //     qty: 85,
  //     tags: ["gray"],
  //     size: { h: 27.9, w: 35.5, uom: "cm" },
  //   },
  //   {
  //     item: "mousepad",
  //     qty: 25,
  //     tags: ["gel", "blue"],
  //     size: { h: 19, w: 22.85, uom: "cm" },
  //   },
  // ]);
  // console.log("result", manyDatas);

  //문제3. inventory에 저장된 모든 데이터를 읽어오자
  // const readAllDatas = await inventory.find({}).toArray();
  // console.log("result", readAllDatas);

  //문제4. status가 D인 데이터를 찾아라
  // const createDatas = await inventory.insertMany([
  //   {
  //     item: "journal",
  //     qty: 25,
  //     size: { h: 14, w: 21, uom: "cm" },
  //     status: "A",
  //   },
  //   {
  //     item: "notebook",
  //     qty: 50,
  //     size: { h: 8.5, w: 11, uom: "in" },
  //     status: "A",
  //   },
  //   {
  //     item: "paper",
  //     qty: 100,
  //     size: { h: 8.5, w: 11, uom: "in" },
  //     status: "D",
  //   },
  //   {
  //     item: "planner",
  //     qty: 75,
  //     size: { h: 22.85, w: 30, uom: "cm" },
  //     status: "D",
  //   },
  //   {
  //     item: "postcard",
  //     qty: 45,
  //     size: { h: 10, w: 15.25, uom: "cm" },
  //     status: "A",
  //   },
  // ]);
  // console.log("createResult", createDatas);

  // const searchData = await inventory.find({ status: "D" }).toArray();
  // console.log("search Result", searchData);

  //문제5. status가 'A’이고 qty가 50인 데이터를 찾아라
  // const searchData = await inventory
  //   .find({ status: "A", qty: { $eq: 50 } })
  //   .toArray();
  // console.log("search Data", searchData);

  //문제6. status가 A 또는 B인 데이터를 찾자
  // const searchData = await inventory
  //   .find({ status: { $in: ["A", "B"] } })
  //   .toArray();
  // console.log("search Data", searchData);

  //문제7. status가 A이고 qty가 30보다 작은 데이터를 찾자
  // const searchData = await inventory
  //   .find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })
  //   .toArray();
  // console.log("search Data", searchData);

  //문제8. status가 A이거나 qty가 30보다 작은 데이터를 찾자
  // const searchData = await inventory
  //   .find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })
  //   .toArray();
  // console.log("search Data", searchData);

  //문제9. size 에 uom이 in 인 데이터를 찾자
  // const searchData = await inventory.find({ "size.uom": "in" }).toArray();
  // console.log("search Data", searchData);

  //문제10. size에 h가 10을 초과하는 데이터를 찾자
  // const searchData = await inventory.find({ "size.h": { $gt: 10 } }).toArray();
  // console.log("search data", searchData);

  //문제11. id가 3인 학생에게 test3 의 점수를 98로 세팅하자
  // const createData = await students.insertMany([
  //   {
  //     _id: 1,
  //     test1: 95,
  //     test2: 92,
  //     test3: 90,
  //     modified: new Date("01/05/2020"),
  //   },
  //   {
  //     _id: 2,
  //     test1: 98,
  //     test2: 100,
  //     test3: 102,
  //     modified: new Date("01/05/2020"),
  //   },
  //   { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
  // ]);
  // console.log("result ", createData);
  // const updateData = await students.updateOne(
  //   { _id: 3 },
  //   { $set: { test3: 98 } }
  // );
  // console.log("update? ", updateData);

  //문제12. 모든데이터의 test1의 점수를 0으로 세팅하고 status:"modified"라는 필드를 추가해라
  // const updateDatas = await students.updateMany(
  //   {},
  //   { $set: { test1: 0, status: "modified" } }
  // );
  // console.log("update?", updateDatas);

  //문제13. test2점수가 92점인 학생을 삭제하자
  // const deleteDatas = await students.deleteMany({ test2: 92 });
  // console.log("delete?", deleteDatas);

  //문제14. test1의 점수가 0인 학생들을 삭제하자
  const deleteDatas = await students.deleteMany({ test1: 0 });
  console.log("delete?", deleteDatas);
}

run();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mongoose-test");
const validator = require("validator");
const { Schema } = mongoose;

//테이블 구조(스키마)
const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      //제약조건(검증)
      validator: function (value) {
        if (!validator.isEmail(value))
          throw new Error("This is not an eamil!!");
      },
    },
    required: true, //반드시 입력해야하는 항목
  },
  password: {
    type: String,
    required: true,
    trim: true, //빈 공백 삭제
  },
  age: {
    type: Number,
    default: 0, //기본값 세팅
  },
});

const User = mongoose.model("User", userSchema); //userSchema를 이용해 User라는 모델 생성

// const newUser = new User({
//   name: "영희",
//   email: "123@naver.com",
//   password: "    abcde",
//   // age: 31,
// });

// newUser.save().then((value) => console.log("value is ", value));

User.find({ name: "재근" })
  .select("name -_id")
  .then((value) => console.log("all dadta", value));

const mongoose = require("mongoose");
const { isEmail } = require("validator");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      lowercase: true,
      unique: [true, "Email is already taken."],
      validate: [isEmail, "Invalid Email"],
      trim: true,
    },
    interviewScheduled: [
      {
        type: Schema.Types.ObjectId,
        ref: "Interview",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;

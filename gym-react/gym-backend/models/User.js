import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  height: String,
  weight: String,
  goal: String,
});

const User = mongoose.model("user", userSchema);

export default User;

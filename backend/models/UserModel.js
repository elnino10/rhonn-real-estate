import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  message: String,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;

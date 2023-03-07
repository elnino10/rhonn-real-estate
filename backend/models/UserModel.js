const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  message: String,
  propertyId: {type: mongoose.Schema.ObjectId, ref: "Property"}  
});

const userModel = mongoose.model("User", userSchema);

export default userModel;

const mongoose = require("mongoose");

const landSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Property name is required"] },
  category: {
    type: String,
    default: "land",
  },
  description: {
    type: String,
    // required: true,
  },
  location: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    lowercase: true,
  },
  image: {
    type: String,
    // required: true,
  },
  images: {
    type: Array,
    // required: true,
  },
  features: {
    type: Array,
    // required: true,
  },
  featureDesc: String,
  price: {
    type: Number,
    // required: true,
  },
  title: String,
});

const landModel = mongoose.model("Land", landSchema);

export default landModel;

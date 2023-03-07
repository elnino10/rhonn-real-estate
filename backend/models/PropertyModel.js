import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  name: { type: String, required: [true, "Property name is required"] },
  category: {
    type: String,
    required: [true, "Product must have category"],
    lowercase: true,
    enum: {
      values: [
        "lands",
        "fully-detached",
        "semi-detached",
        "terrace",
        "apartments",
        "others",
      ],
    },
  },
  description: {
    type: String,
    required: true,
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
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  featureDesc: String,
  price: {
    type: Number,
    required: true,
  },
  title: String,
});

const propertyModel = mongoose.model("Property", propertySchema);

export default propertyModel;

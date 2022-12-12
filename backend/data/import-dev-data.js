/* eslint-disable no-undef */
import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import url from "url";
import Property from "../models/propertyModel.js";

dotenv.config();
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mongodbUrl = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected.....");
  });

//   READ JSON FILE
const properties = JSON.parse(
  fs.readFileSync("./backend/data/propsData.json", "utf-8")
);

//   IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Property.create(properties);
    console.log("data loaded!!!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Property.deleteMany();
    console.log("data deleted successfully!!!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// TAKE ACTIONS FROM COMMAND LINE
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

// console.log(process.argv);
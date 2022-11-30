import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config.js";
import UserRoute from "./routes/UserRoute.js";
import PropertyRoute from "./routes/PropertyRoute.js";

dotenv.config();

// const mongodbUrl = config.MONGODB_URL;

// mongoose
//   .connect(mongodbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("db connected...");
//   })
//   .catch((error) => console.log(error));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", UserRoute);
app.use("/api/properties", PropertyRoute);

const port = config.PORT;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

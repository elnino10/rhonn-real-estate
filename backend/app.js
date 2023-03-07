import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import UserRoute from "./routes/UserRoute.js";
import PropertyRoute from "./routes/PropertyRoute.js";
import LandRoute from "./routes/LandRoute.js";

const upload = multer();
dotenv.config();

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
    console.log("db connected...!!!");
  })
  .catch((error) => console.log(error));

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use("/api/users", UserRoute);
app.use("/api/properties", PropertyRoute);
app.use("/api/lands", LandRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

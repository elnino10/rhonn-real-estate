import express from "express";
import Property from "../models/propertyModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const PropsData = await Property.find();

    res.json({
      status: "success",
      results: PropsData.length,
      data: PropsData,
    });
  } catch (error) {
    console.log(error);
    res.send("Not Found!");
  }
});

router.get("/:itemId", async (req, res) => {
  try {
    const property = await Property.findById(req.params.itemId);

    res.json({
      status: "success",
      data: { property },
    });
  } catch (error) {
    console.log(error);
    res.send("Property Not Found!");
  }
});

export default router;

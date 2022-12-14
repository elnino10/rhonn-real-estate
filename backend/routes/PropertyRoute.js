import express from "express";
import Property from "../models/propertyModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const queryObj = { ...req.query };

    const propsData = await Property.find(queryObj);

    if (propsData.length === 0) {
      res.json({
        status: "success",
        message: "Search result not found!",
      });
      return;
    }

    res.json({
      status: "success",
      results: propsData.length,
      data: propsData,
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

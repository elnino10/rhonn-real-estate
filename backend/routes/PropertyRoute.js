import express from "express";
import Property from "../models/PropertyModel.js";
import PropsData from "../data/PropsData.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // const queryObj = {...req.query};
    // let properties;
    // if (req.query) {
    //   properties = await Property.find(queryObj);
    // }
    res.json(PropsData);
  } catch (error) {
    console.log(error);
    res.send("Not Found");
  }
});

router.get("/:itemId", async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    res.status(404).json({
      status: "Property Not Found",
    });
  }
  res.status(200).json({
    status: "success",
    data: { property },
  });
});

export default router;

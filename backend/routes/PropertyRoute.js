import express from "express";
import Property from "../models/PropertyModel.js";
import PropsData from "../data/PropsData.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // const {state, category} = req.query;

    // const keys = ["state", "category"]
    // const search = (data) => {
    //   return data.filter(item => {
    //     keys.forEach(key => item[key].includes(state) && item[keys].includes(category))
      // })
  // }
  // console.log(req.query);

    res.json({
      status: "success",
      results: PropsData.length,
      data: PropsData
    });
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

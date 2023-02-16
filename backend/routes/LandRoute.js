import express from "express";
import Land from "../models/landModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const queryObj = { ...req.query };

    const propsData = await Land.find(queryObj);

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
    const property = await Land.findById(req.params.itemId);

    res.json({
      status: "success",
      data: { property },
    });
  } catch (error) {
    console.log(error);
    res.send("Property Not Found!");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, price, location, state } = req.body;
    const property = await Land.create({ name, price, location, state });

    res.json({
      status: "success",
      data: { property },
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default router;

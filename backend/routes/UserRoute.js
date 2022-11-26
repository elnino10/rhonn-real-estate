import express from "express";
import User from "../models/UserModel.js";

const router = express.Router();

export const postMessage = router.post("/post-message", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const userPost = await User.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({ status: "Message sent!", data: { userPost } });
  } catch (error) {
    console.log(error);
  }
});

export default router;

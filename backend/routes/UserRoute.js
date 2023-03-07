const express = require("express");
import User from "../models/UserModel.js";

const router = express.Router();

export const postMessage = router.post("/post-message", async (req, res) => {
  try {
    const { name, email, phone, message, propertyId } = req.body;

    const userPost = await User.create({
      name,
      email,
      phone,
      message,
      propertyId,
    });

    res.json({ status: "Message sent successfully!", data: { userPost } });
  } catch (error) {
    // console.log(error.message);
    res.json({ status: "Message not sent! Try again" });
  }
});

export default router;
